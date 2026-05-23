import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px" }}>
      <div className="auth-container" style={{ textAlign: "center", maxWidth: "440px" }}>
        <div className="auth-header-icon" style={{ backgroundColor: "rgba(226, 55, 68, 0.08)", border: "1px solid rgba(226, 55, 68, 0.15)", color: "var(--primary)" }}>
          <i className="bi bi-exclamation-octagon"></i>
        </div>
        <h1 style={{ fontSize: "72px", fontWeight: "900", background: "linear-gradient(to right, var(--primary), #cb202d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "10px 0" }}>404</h1>
        <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "15px", color: "var(--text-main)" }}>Resource Not Found</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "30px", lineHeight: "1.6" }}>
          The page you are looking for does not exist or you do not have sufficient admin privileges to access this area.
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button style={{ width: "100%", margin: 0 }}>
            <i className="bi bi-house-door me-2"></i>Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
export default NotFound;