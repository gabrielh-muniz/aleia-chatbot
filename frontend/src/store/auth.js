import { create } from "zustand";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { catchError } from "@/lib/errorHandler.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const defaultState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  isCheckingAuth: true,
  error: null,
  isAdmin: false,
};

export const useAuthStore = create((set) => {
  // Setup a listener for auth state changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        isCheckingAuth: false,
      });
    } else {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        isCheckingAuth: false,
      });
    }
  });

  return {
    ...defaultState,

    login: async (email, password) => {
      set({ isLoading: true, error: null });
      const [error, userCredential] = await catchError(
        signInWithEmailAndPassword(auth, email, password)
      );
      if (error) {
        set({
          isLoading: false,
          error: error.message,
        });
        return;
      }
      set({
        user: userCredential.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    },

    logout: async () => {
      set({ isLoading: true, error: null });
      const [error, _] = await catchError(signOut(auth));
      if (error) {
        set({ isLoading: false, error: error.message });
        return;
      }
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    },

    sendPasswordResetEmail: async (email) => {
      set({ isLoading: true, error: null });
      const actionCodeSettings = {
        url: `${window.location.origin}/auth/login`,
      };
      const [error, _] = await catchError(
        sendPasswordResetEmail(auth, email, actionCodeSettings)
      );
      if (error) {
        set({ isLoading: false, error: error.message });
        return;
      }
      set({ isLoading: false, error: null });
    },
  };
});
