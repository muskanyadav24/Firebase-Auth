import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    const registeredEmail = localStorage.getItem("registeredEmail");
    if (!registeredEmail || formData.email.trim().toLowerCase() !== registeredEmail.trim().toLowerCase()) {
      setError("Email not registered!");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
        localStorage.setItem("registeredPassword", formData.newPassword);
        alert("Password Changed Successfully! You can now login.");
        setLoading(false);
        navigate("/");
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-header-icon">
        <i className="bi bi-shield-exclamation"></i>
      </div>
      <h1>Reset Password</h1>
      <p className="subtitle">Enter your email and your new password to reset it</p>

      <form onSubmit={handleResetPassword}>

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
          <label htmlFor="newPassword">New Password</label>
          <div className="input-wrapper">
            <i className="bi bi-shield-lock"></i>
            <input
              id="newPassword"
              type="password"
              placeholder="••••••••"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-wrapper">
            <i className="bi bi-shield-check"></i>
            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              name="confirmPassword"
              value={formData.confirmPassword}
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

        <button type="submit" disabled={loading}>
          {loading ? "Resetting..." : "Update Password"}
        </button>
      </form>

      <div className="auth-footer">
        <p>
          <Link to="/"><i className="bi bi-arrow-left me-1"></i>Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;