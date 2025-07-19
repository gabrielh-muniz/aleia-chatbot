import { useAuthStore } from "@/store/auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) return <div>Loading...</div>;

  return !isAuthenticated ? (
    <Navigate to="/auth/login" replace />
  ) : (
    { children }
  );
}
