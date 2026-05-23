import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function ChangePassword() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role") || "user";

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError("");
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const registeredPassword = localStorage.getItem("registeredPassword");
    if (passwords.oldPassword !== registeredPassword) {
      setError("Incorrect current password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
        localStorage.setItem("registeredPassword", passwords.newPassword);
        alert("Password Changed Successfully! Please sign in again with your new password.");
        localStorage.removeItem("token");
        setLoading(false);
        navigate("/login");
    }, 1000);
  };

  const dashboardLink = userRole === "admin" ? "/admin-dashboard" : "/user-dashboard";

  return (
    <div className="auth-container">
      <div className="auth-header-icon">
        <i className="bi bi-key"></i>
      </div>
      <h1>Change Password</h1>
      <p className="subtitle">Update your account security</p>

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label htmlFor="oldPassword">Current Password</label>
          <div className="input-wrapper">
            <i className="bi bi-lock"></i>
            <input
              id="oldPassword"
              type="password"
              name="oldPassword"
              placeholder="••••••••"
              value={passwords.oldPassword}
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
              name="newPassword"
              placeholder="••••••••"
              value={passwords.newPassword}
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
              name="confirmPassword"
              placeholder="••••••••"
              value={passwords.confirmPassword}
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
          {loading ? "Updating..." : "Update Password"}
        </button>

        <div className="auth-footer">
          <p>
            <Link to={dashboardLink}><i className="bi bi-arrow-left me-1"></i>Back to Dashboard</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;