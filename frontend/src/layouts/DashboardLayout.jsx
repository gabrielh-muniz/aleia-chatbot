import AppSidebar from "@/components/AppSidebar";
import { useAuthStore } from "@/store/auth";
import { useNavigate, Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

function DashboardLayout() {
  const { logout } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/auth/login");
  };

  return (
    <SidebarProvider className="flex h-screen">
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <main>
          <Outlet />
        </main>
        <button
          className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default DashboardLayout;
