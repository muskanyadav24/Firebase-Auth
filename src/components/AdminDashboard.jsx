import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const username = localStorage.getItem("username") || "Admin";
  const user = { username: username, email: "admin@project.com" };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-layout">

      <div className="sidebar">
        <div className="sidebar-logo" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "22px", fontWeight: "800", letterSpacing: "1px", marginBottom: "40px", paddingLeft: "10px", background: "linear-gradient(135deg, var(--primary) 0%, #a855f7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          <i className="bi bi-shield-lock-fill" style={{ color: "var(--primary)", fontSize: "24px" }}></i>
          Auth Admin
        </div>

        <ul className="sidebar-menu" style={{ listStyle: "none", flexGrow: 1, padding: 0 }}>
          <li 
            className={`sidebar-item ${activeTab === "dashboard" ? "active" : ""}`} 
            onClick={() => setActiveTab("dashboard")}
            style={{
              padding: "14px 20px",
              borderRadius: "16px",
              marginBottom: "10px",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
              color: activeTab === "dashboard" ? "var(--primary)" : "var(--text-muted)",
              background: activeTab === "dashboard" ? "rgba(226, 55, 68, 0.06)" : "transparent",
              border: activeTab === "dashboard" ? "1px solid rgba(226, 55, 68, 0.12)" : "1px solid transparent",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.3s ease"
            }}
          >
            <i className="bi bi-speedometer2" style={{ fontSize: "16px" }}></i>
            Dashboard
          </li>

          <li 
            className="sidebar-item" 
            onClick={() => navigate("/user-dashboard")}
            style={{
              padding: "14px 20px",
              borderRadius: "16px",
              marginBottom: "10px",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.3s ease"
            }}
          >
            <i className="bi bi-people" style={{ fontSize: "16px" }}></i>
            User View
          </li>

          <li 
            className={`sidebar-item ${activeTab === "reports" ? "active" : ""}`} 
            onClick={() => setActiveTab("reports")}
            style={{
              padding: "14px 20px",
              borderRadius: "16px",
              marginBottom: "10px",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
              color: activeTab === "reports" ? "var(--primary)" : "var(--text-muted)",
              background: activeTab === "reports" ? "rgba(226, 55, 68, 0.06)" : "transparent",
              border: activeTab === "reports" ? "1px solid rgba(226, 55, 68, 0.12)" : "1px solid transparent",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.3s ease"
            }}
          >
            <i className="bi bi-bar-chart-line" style={{ fontSize: "16px" }}></i>
            Reports
          </li>

          <li 
            className={`sidebar-item ${activeTab === "settings" ? "active" : ""}`} 
            onClick={() => setActiveTab("settings")}
            style={{
              padding: "14px 20px",
              borderRadius: "16px",
              marginBottom: "10px",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
              color: activeTab === "settings" ? "var(--primary)" : "var(--text-muted)",
              background: activeTab === "settings" ? "rgba(226, 55, 68, 0.06)" : "transparent",
              border: activeTab === "settings" ? "1px solid rgba(226, 55, 68, 0.12)" : "1px solid transparent",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.3s ease"
            }}
          >
            <i className="bi bi-gear" style={{ fontSize: "16px" }}></i>
            Settings
          </li>
        </ul>

        <div className="sidebar-footer" style={{ borderTop: "1px solid var(--glass-border)", paddingTop: "20px" }}>
          <button 
            className="logout-btn" 
            onClick={handleLogout}
            style={{ 
              width: "100%", 
              background: "rgba(226, 55, 68, 0.06)", 
              color: "var(--primary)", 
              border: "1px solid rgba(226, 55, 68, 0.15)", 
              padding: "12px", 
              borderRadius: "12px", 
              fontWeight: "600", 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "8px",
              transition: "all 0.3s ease" 
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "rgba(226, 55, 68, 0.06)"; e.currentTarget.style.color = "var(--primary)"; }}
          >
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </button>
        </div>
      </div>

      <div className="main-area">

        <header className="header">
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-main)", margin: 0 }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Overview
            </h2>
            <span className="role-badge role-admin">
              Administrator
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>

            <Link to="/change-password" style={{ textDecoration: "none" }}>
              <button 
                style={{ 
                  padding: "10px 18px", 
                  fontSize: "13px", 
                  borderRadius: "12px", 
                  border: "1px solid var(--glass-border)", 
                  background: "transparent", 
                  color: "var(--text-main)", 
                  fontWeight: "600",
                  cursor: "pointer", 
                  transition: "all 0.3s ease" 
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "var(--primary)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--glass-border)"; }}
              >
                <i className="bi bi-key me-2"></i>Change Password
              </button>
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-main)", margin: 0 }}>{user?.username || "Admin User"}</p>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>{user?.email || "admin@project.com"}</p>
              </div>
              <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "linear-gradient(135deg, var(--primary) 0%, #cb202d 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "16px", color: "#fff", boxShadow: "0 4px 12px rgba(226, 55, 68, 0.2)" }}>
                {user?.username?.charAt(0).toUpperCase() || "A"}
              </div>
            </div>
          </div>
        </header>

        <div style={{ padding: "40px", flex: 1 }}>
          {activeTab === "dashboard" && (
            <div>
              <div style={{ marginBottom: "35px" }}>
                <h1 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px", marginBottom: "6px", color: "var(--text-main)", textAlign: "left" }}>Welcome Back, Admin!</h1>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>Here is a live summary of the system and registrations.</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "25px", marginBottom: "40px" }}>
                <div className="card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-muted)" }}>Total Customers</span>
                    <span style={{ padding: "4px 8px", background: "rgba(38, 165, 65, 0.1)", color: "var(--success)", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>+14.2%</span>
                  </div>
                  <h3 style={{ fontSize: "32px", fontWeight: "800", margin: "0 0 5px 0", color: "var(--text-main)" }}>1,482</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>42 registered today</p>
                </div>

                <div className="card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-muted)" }}>API Requests</span>
                    <span style={{ padding: "4px 8px", background: "rgba(38, 165, 65, 0.1)", color: "var(--success)", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>+23%</span>
                  </div>
                  <h3 style={{ fontSize: "32px", fontWeight: "800", margin: "0 0 5px 0", color: "var(--text-main)" }}>94.2K</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>99.98% success rate</p>
                </div>

                <div className="card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-muted)" }}>Active Sessions</span>
                    <span style={{ padding: "4px 8px", background: "rgba(226, 55, 68, 0.1)", color: "var(--primary)", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>-2.4%</span>
                  </div>
                  <h3 style={{ fontSize: "32px", fontWeight: "800", margin: "0 0 5px 0", color: "var(--text-main)" }}>284</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>32 admins online</p>
                </div>

                <div className="card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-muted)" }}>System Health</span>
                    <span style={{ padding: "4px 8px", background: "rgba(38, 165, 65, 0.2)", color: "var(--success)", borderRadius: "6px", fontSize: "10px", fontWeight: "700", textTransform: "uppercase" }}>Stable</span>
                  </div>
                  <h3 style={{ fontSize: "32px", fontWeight: "800", margin: "0 0 5px 0", color: "var(--success)" }}>99.9%</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>All services healthy</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "30px" }}>

                <div className="card">
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", color: "var(--text-main)" }}>Server Resource Diagnostics</h3>

                  <div style={{ marginBottom: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--text-muted)", marginBottom: "6px" }}>
                      <span>CPU Load</span>
                      <span style={{ color: "var(--text-main)", fontWeight: "600" }}>38%</span>
                    </div>
                    <div style={{ height: "8px", background: "rgba(0,0,0,0.05)", borderRadius: "10px", overflow: "hidden" }}>
                      <div style={{ width: "38%", height: "100%", background: "linear-gradient(to right, var(--primary), #cb202d)", borderRadius: "10px" }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--text-muted)", marginBottom: "6px" }}>
                      <span>Memory Allocations (RAM)</span>
                      <span style={{ color: "var(--text-main)", fontWeight: "600" }}>62%</span>
                    </div>
                    <div style={{ height: "8px", background: "rgba(0,0,0,0.05)", borderRadius: "10px", overflow: "hidden" }}>
                      <div style={{ width: "62%", height: "100%", background: "linear-gradient(to right, var(--primary), var(--secondary))", borderRadius: "10px" }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: "5px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--text-muted)", marginBottom: "6px" }}>
                      <span>Network Bandwidth Usage</span>
                      <span style={{ color: "var(--text-main)", fontWeight: "600" }}>14%</span>
                    </div>
                    <div style={{ height: "8px", background: "rgba(0,0,0,0.05)", borderRadius: "10px", overflow: "hidden" }}>
                      <div style={{ width: "14%", height: "100%", background: "var(--success)", borderRadius: "10px" }} />
                    </div>
                  </div>
                </div>

                <div className="card" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "5px", color: "var(--text-main)" }}>Gateway Status</h3>

                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <div style={{ position: "relative" }}>
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--success)" }} />
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--success)", position: "absolute", top: 0, left: 0, animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: "600", margin: 0, color: "var(--text-main)" }}>Database Sync</h4>
                      <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>Synced 2s ago</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--success)" }} />
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: "600", margin: 0, color: "var(--text-main)" }}>API Server Node</h4>
                      <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>Latency: 14ms</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ marginTop: "40px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", color: "var(--text-main)" }}>Recent Activity Stream</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--glass-border)", paddingBottom: "12px" }}>
                    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)" }} />
                      <span style={{ fontSize: "13px", color: "var(--text-main)" }}>Administrator logged in from IP 192.168.1.14</span>
                    </div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>2 mins ago</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--glass-border)", paddingBottom: "12px" }}>
                    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--success)" }} />
                      <span style={{ fontSize: "13px", color: "var(--text-main)" }}>New user account created: <strong>rinku@gmail.com</strong></span>
                    </div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>45 mins ago</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)" }} />
                      <span style={{ fontSize: "13px", color: "var(--text-main)" }}>System backup completed successfully (backup_v21.db)</span>
                    </div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div style={{ animation: "fadeIn 0.5s ease-out" }}>
              <div style={{ marginBottom: "35px" }}>
                <h1 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px", color: "var(--text-main)", textAlign: "left" }}>System Reports</h1>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>Analyze revenue, metrics, and traffic density data.</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginBottom: "40px" }}>
                <div className="card">
                  <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600" }}>Weekly Growth Margin</span>
                  <h3 style={{ fontSize: "32px", fontWeight: "800", color: "var(--success)", margin: "10px 0" }}>$12,450</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>↑ 18.4% compared to previous week</p>
                </div>

                <div className="card">
                  <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600" }}>Registration Growth</span>
                  <h3 style={{ fontSize: "32px", fontWeight: "800", color: "var(--primary)", margin: "10px 0" }}>+154 Users</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>Registered users active rate is 91.2%</p>
                </div>
              </div>

              <div className="card" style={{ padding: "35px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "25px", color: "var(--text-main)" }}>Weekly Traffic Density</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "200px", padding: "0 20px" }}>
                  {[40, 65, 35, 90, 55, 80, 95].map((val, idx) => (
                    <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "8%" }}>
                      <div style={{ height: `${val * 1.5}px`, width: "100%", background: idx === 6 ? "linear-gradient(to top, var(--primary), #cb202d)" : "rgba(226, 55, 68, 0.08)", border: "1px solid rgba(226, 55, 68, 0.15)", borderRadius: "8px", position: "relative" }}>
                        <span style={{ position: "absolute", top: "-25px", left: "50%", transform: "translateX(-50%)", fontSize: "11px", fontWeight: "600", color: "var(--text-main)" }}>{val}%</span>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][idx]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div style={{ animation: "fadeIn 0.5s ease-out" }}>
              <div style={{ marginBottom: "35px" }}>
                <h1 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px", color: "var(--text-main)", textAlign: "left" }}>System Settings</h1>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>Manage notification settings and configurations.</p>
              </div>

              <div className="card" style={{ maxWidth: "600px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "25px", color: "var(--text-main)" }}>Notification Preferences</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--glass-border)", paddingBottom: "15px" }}>
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 4px 0", color: "var(--text-main)" }}>System Critical Alerts</h4>
                      <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>Receive immediate email updates for downtime</p>
                    </div>
                    <input type="checkbox" defaultChecked style={{ width: "20px", height: "20px", accentColor: "var(--primary)" }} />
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--glass-border)", paddingBottom: "15px" }}>
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 4px 0", color: "var(--text-main)" }}>Daily Audit Logs</h4>
                      <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>Generate and download daily login activities</p>
                    </div>
                    <input type="checkbox" defaultChecked style={{ width: "20px", height: "20px", accentColor: "var(--primary)" }} />
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 4px 0", color: "var(--text-main)" }}>Weekly Growth Reports</h4>
                      <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>Receive user registration growth graphs</p>
                    </div>
                    <input type="checkbox" style={{ width: "20px", height: "20px", accentColor: "var(--primary)" }} />
                  </div>
                </div>

                <button 
                  style={{ 
                    marginTop: "30px", 
                    background: "var(--primary)", 
                    border: "none", 
                    padding: "12px 24px", 
                    borderRadius: "12px", 
                    color: "#fff", 
                    fontWeight: "600", 
                    fontSize: "14px",
                    cursor: "pointer", 
                    boxShadow: "0 4px 14px rgba(226, 55, 68, 0.25)",
                    transition: "all 0.3s ease" 
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = "var(--primary-hover)"}
                  onMouseOut={(e) => e.currentTarget.style.background = "var(--primary)"}
                >
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;