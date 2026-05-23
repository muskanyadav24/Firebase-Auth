import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Use localStorage for mock frontend state instead of backend
  const userRole = localStorage.getItem("role") || "user";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/admin-dashboard" element={<ProtectedRoute>{userRole === "admin" ? <AdminDashboard /> : <NotFound />}</ProtectedRoute>} />
        <Route path="/user-dashboard" element={<ProtectedRoute>{(userRole === "user" || userRole === "admin") ? <UserDashboard /> : <NotFound />}</ProtectedRoute>} />
        
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;