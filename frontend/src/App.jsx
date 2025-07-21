import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import ProtectedRoute from "@/components/ProtectedRoute";
import UserAuthControl from "@/components/UserAuthControl";
import DashboardLayout from "@/layouts/DashboardLayout";

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
          <Route index element={<div>Dashboard Home</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="profile" element={<div>Profile Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
