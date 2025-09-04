import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { catchError } from "@/lib/errorHandler";
import NavUser from "@/components/NavUser";
import { NAVIGATION_DATA } from "@/constants/navigation";

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
      <SidebarContent>
        {NAVIGATION_DATA.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.isActive}>
                      {item.icon && <item.icon />}
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        {/* <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LayoutDashboard className="size-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
