import AppSidebar from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { UserPlus } from "lucide-react";

function DashboardLayout() {
  return (
    <SidebarProvider className="flex h-screen">
      <AppSidebar />
      <SidebarInset className="bg-cyan-50">
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 z-50">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex-1" />
          <Button
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-200"
            variant="outline"
            onClick={() => {
              // TODO: Add create user functionality
              console.log("Create user clicked");
            }}
          >
            <UserPlus className="h-3 w-3" />
            <span className="hidden md:inline-block ml-1">Create User</span>
          </Button>
        </header>
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default DashboardLayout;
