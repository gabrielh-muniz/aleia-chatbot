import { useAuthStore } from "@/store/auth";
import { Navigate } from "react-router-dom";

export default function UserAuthControl({ children }) {
  const { isAuthenticated, isCheckingAuth, user } = useAuthStore();

  if (isCheckingAuth) return <div>Loading...</div>;

  return isAuthenticated || user ? (
    <Navigate to="/dashboard" replace />
  ) : (
    children
  );
}
