import { useAuthStore } from "@/store/auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isCheckingAuth, user } = useAuthStore();

  if (isCheckingAuth) return <div>Loading...</div>;

  return !isAuthenticated || !user ? (
    <Navigate to="/auth/login" replace />
  ) : (
    children
  );
}
