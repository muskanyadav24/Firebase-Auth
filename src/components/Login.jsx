
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setError(""); 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
        const registeredEmail = localStorage.getItem("registeredEmail");
        const registeredPassword = localStorage.getItem("registeredPassword");
        const registeredRole = localStorage.getItem("registeredRole");
        const registeredName = localStorage.getItem("registeredName");

        // Validate user against registered data
        if (!registeredEmail) {
            setError("No registered user found. Please sign up first.");
            setLoading(false);
            return;
        }

        if (formData.email.trim().toLowerCase() !== registeredEmail.trim().toLowerCase()) {
            setError("Invalid email! User not found.");
            setLoading(false);
            return;
        }

        if (formData.password !== registeredPassword) {
            setError("Incorrect password! Try again.");
            setLoading(false);
            return;
        }

        localStorage.setItem("role", registeredRole || "user");
        localStorage.setItem("username", registeredName || formData.email.split("@")[0]);

        setLoading(false);
        localStorage.setItem("token", "mock-token");
        
        if (localStorage.getItem("role") === "admin") {
            navigate("/admin-dashboard");
        } else {
            navigate("/user-dashboard");
        }
        window.location.reload();
    }, 1000);
  };
  return (
    <div className="auth-container">
      <div className="auth-header-icon">
        <i className="bi bi-person-circle"></i>
      </div>
      <h1>Firebase <span>Auth</span></h1>
      <p className="subtitle">Sign in to your account</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <div className="input-wrapper">
            <i className="bi bi-envelope"></i>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <i className="bi bi-shield-lock"></i>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {error && (
          <div className="error-message">
            <i className="bi bi-exclamation-triangle-fill"></i>
            {error}
          </div>
        )}
        <button type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</button>
        <div className="auth-footer">
          <p>
            Don't have an account?
            <Link to="/register">Sign Up</Link>
          </p>
          <p style={{ marginTop: "12px" }}>
            <Link to="/forgot-password"><i className="bi bi-question-circle me-1"></i>Forgot password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;
