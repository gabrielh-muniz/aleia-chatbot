import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import ProtectedRoute from "@/components/ProtectedRoute";
import UserAuthControl from "@/components/UserAuthControl";

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
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div>Dashboard</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
