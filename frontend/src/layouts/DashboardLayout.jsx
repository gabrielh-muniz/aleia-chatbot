import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-4 font-bold">Dashboard Sidebar</div>
        <nav className="space-y-2">
          <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </a>
          <a
            href="/dashboard/settings"
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Settings
          </a>
          <a
            href="/dashboard/profile"
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Profile
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-gray-100 p-4 shadow">Dashboard Header</header>

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 p-4 text-center">
          Dashboard Footer
        </footer>
      </div>
    </div>
  );
}

export default DashboardLayout;
