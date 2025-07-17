import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello, App!</div>} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
