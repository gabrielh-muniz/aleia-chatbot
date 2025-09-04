import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import ProtectedRoute from "@/components/ProtectedRoute";
import UserAuthControl from "@/components/UserAuthControl";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProfilePage from "@/pages/ProfilePage";
import DashboardPage from "@/pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello, App!</div>} />
        <Route
          path="/auth/login"
          element={
            <UserAuthControl>
              <LoginPage />
            </UserAuthControl>
          }
        />
        <Route
          path="/auth/forgot-password"
          element={
            <UserAuthControl>
              <ForgotPasswordPage />
            </UserAuthControl>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
