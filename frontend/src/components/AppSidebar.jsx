import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { catchError } from "@/lib/errorHandler";
import NavUser from "@/components/NavUser";
import { UserPlus } from "lucide-react";

function AppSidebar() {
  const navigate = useNavigate();

  const { logout, user } = useAuthStore();

  const handleLogout = async () => {
    const [logoutError, _] = await catchError(logout());
    if (logoutError) {
      console.error("Logout failed:", logoutError);
      return;
    }
    navigate("/auth/login");
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        <NavUser user={user} handleLogout={handleLogout} />
      </SidebarHeader>
      <SidebarContent></SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
