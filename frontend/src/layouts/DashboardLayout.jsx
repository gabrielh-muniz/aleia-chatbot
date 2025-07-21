import { Navigate, Outlet } from "react-router-dom";
import AppSidebar from "@/components/AppSidebar";
import { useAuthStore } from "@/store/auth";
import { useNavigate } from "react-router-dom";

function DashboardLayout() {
  const { logout } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/auth/login");
  };

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1">
        <Outlet />
      </div>
      <button
        className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardLayout;
