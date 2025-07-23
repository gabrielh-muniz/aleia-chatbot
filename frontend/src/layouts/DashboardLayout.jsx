import AppSidebar from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

function DashboardLayout() {
  return (
    <SidebarProvider className="flex h-screen">
      <AppSidebar />
      <SidebarInset className="bg-cyan-50">
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default DashboardLayout;
