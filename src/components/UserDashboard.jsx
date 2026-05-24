import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function UserDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("projects");
  const username = localStorage.getItem("username") || "User";
  const user = { username: username, email: "user@project.com" };

  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete the Authentication Flow API integration", status: "in-progress", due: "Tomorrow" },
    { id: 2, text: "Design database schemas for user profiles", status: "completed", due: "Completed" },
    { id: 3, text: "Configure environment variables and deployment scripts", status: "todo", due: "3 days left" }
  ]);
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskStatus, setNewTaskStatus] = useState("todo");

  const [supportMessage, setSupportMessage] = useState("");
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      status: newTaskStatus,
      due: "Pending"
    };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const handleToggleStatus = (id, nextStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: nextStatus } : t));
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    if (!supportMessage.trim()) return;
    setSupportSubmitted(true);
    setTimeout(() => {
      setSupportMessage("");
    }, 4000);
  };

  return (
    <div className="dashboard-layout">

      <div className="sidebar">
        <div className="sidebar-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#user-logo-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}>
            <defs>
              <linearGradient id="user-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--secondary)" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" />
            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
          </svg>
          USER CORE
        </div>

        <ul className="sidebar-menu">
          <li 
            className={`sidebar-item ${activeTab === "projects" ? "active" : ""}`} 
            onClick={() => setActiveTab("projects")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            My Projects
          </li>

          <li 
            className={`sidebar-item ${activeTab === "tasks" ? "active" : ""}`} 
            onClick={() => setActiveTab("tasks")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            My Tasks
          </li>

          <li 
            className={`sidebar-item ${activeTab === "analytics" ? "active" : ""}`} 
            onClick={() => setActiveTab("analytics")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
            Analytics
          </li>

          <li 
            className={`sidebar-item ${activeTab === "support" ? "active" : ""}`} 
            onClick={() => setActiveTab("support")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Support
          </li>
        </ul>

        <div className="sidebar-footer" style={{ borderTop: "1px solid var(--glass-border)", paddingTop: "20px" }}>
          <button 
            className="logout-btn" 
            onClick={handleLogout}
            style={{ 
              width: "100%", 
              background: "rgba(244, 63, 94, 0.1)", 
              color: "#fb7185", 
              border: "1px solid rgba(244, 63, 94, 0.2)", 
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
            onMouseOver={(e) => { e.currentTarget.style.background = "#e11d48"; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "rgba(244, 63, 94, 0.1)"; e.currentTarget.style.color = "#fb7185"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
            </svg>
            Logout
          </button>
        </div>
      </div>

      <div className="main-area">

        <header className="header">
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-main)", margin: 0 }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Area
            </h2>
            <span className="role-badge" style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "10px", fontWeight: "700", background: "rgba(99, 102, 241, 0.15)", color: "#818cf8", border: "1px solid rgba(99, 102, 241, 0.2)", letterSpacing: "1px", textTransform: "uppercase" }}>
              Standard User
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
                Change Password
              </button>
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-main)", margin: 0 }}>{user?.username || "Standard User"}</p>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>{user?.email || "user@project.com"}</p>
              </div>
              <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "16px", color: "#fff", boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)" }}>
                {user?.username?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
          </div>
        </header>

        <div style={{ padding: "40px", flex: 1 }}>
          {activeTab === "projects" && (
            <div style={{ animation: "fadeIn 0.5s ease-out" }}>
              <div style={{ marginBottom: "35px" }}>
                <h1 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px", marginBottom: "6px", color: "var(--text-main)", textAlign: "left" }}>Welcome Back, {user?.username || "Member"}!</h1>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>Here is the progress report of your current assignments.</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px", marginBottom: "40px" }}>
                <div className="card">
                  <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600" }}>Total Projects</span>
                  <h3 style={{ fontSize: "32px", fontWeight: "800", margin: "10px 0 5px 0", color: "var(--text-main)" }}>12</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>3 active workspaces</p>
                </div>

                <div className="card">
                  <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600" }}>Overall Completion</span>
                  <h3 style={{ fontSize: "32px", fontWeight: "800", margin: "10px 0 5px 0", color: "var(--primary)" }}>85%</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>↑ 4% growth since Monday</p>
                </div>

                <div className="card">
                  <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600" }}>Tasks Left</span>
                  <h3 style={{ fontSize: "32px", fontWeight: "800", margin: "10px 0 5px 0", color: "var(--text-main)" }}>{tasks.filter(t => t.status !== 'completed').length} Left</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>{tasks.filter(t => t.status === 'completed').length} completed tasks</p>
                </div>
              </div>

              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", color: "var(--text-main)", textAlign: "left" }}>Active Workspaces</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "25px" }}>
                <div className="card">
                  <span style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818cf8", padding: "4px 10px", borderRadius: "10px", fontSize: "10px", fontWeight: "700", textTransform: "uppercase" }}>Development</span>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", marginTop: "15px", marginBottom: "10px", color: "var(--text-main)" }}>Auth CRUD Integration</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.5", marginBottom: "20px" }}>API gateway configurations and credential validation handlers.</p>

                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--text-muted)", marginBottom: "6px" }}>
                    <span>Milestone Progress</span>
                    <span style={{ fontWeight: "700", color: "#fff" }}>70%</span>
                  </div>
                  <div style={{ height: "6px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ width: "70%", height: "100%", background: "linear-gradient(to right, var(--primary), var(--secondary))", borderRadius: "10px" }} />
                  </div>
                </div>

                <div className="card">
                  <span style={{ background: "rgba(168, 85, 247, 0.15)", color: "#c084fc", padding: "4px 10px", borderRadius: "10px", fontSize: "10px", fontWeight: "700", textTransform: "uppercase" }}>UI/UX Review</span>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", marginTop: "15px", marginBottom: "10px", color: "var(--text-main)" }}>Redux State Polish</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.5", marginBottom: "20px" }}>Optimizing local storage updates and state selector rendering efficiency.</p>

                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--text-muted)", marginBottom: "6px" }}>
                    <span>Milestone Progress</span>
                    <span style={{ fontWeight: "700", color: "#fff" }}>100%</span>
                  </div>
                  <div style={{ height: "6px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ width: "100%", height: "100%", background: "var(--success)", borderRadius: "10px" }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tasks" && (
            <div style={{ animation: "fadeIn 0.5s ease-out" }}>
              <div style={{ marginBottom: "35px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <h1 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px", color: "var(--text-main)", textAlign: "left" }}>Task Center</h1>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>Add and update your interactive tasks dashboard.</p>
                </div>
              </div>

              <div className="card" style={{ marginBottom: "35px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "15px", color: "var(--text-main)" }}>Create New Task</h3>
                <form onSubmit={handleAddTask} style={{ display: "flex", gap: "15px", flexWrap: "wrap", flexDirection: "row", alignItems: "center" }}>
                  <input 
                    type="text" 
                    placeholder="Enter task description..." 
                    value={newTaskText} 
                    onChange={(e) => setNewTaskText(e.target.value)}
                    style={{ flex: 1, minWidth: "200px", padding: "10px 15px", fontSize: "14px", borderRadius: "10px", background: "var(--input-bg)", border: "1px solid var(--glass-border)", color: "#fff", outline: "none" }}
                  />
                  <select 
                    value={newTaskStatus} 
                    onChange={(e) => setNewTaskStatus(e.target.value)}
                    style={{ width: "160px", padding: "10px", fontSize: "14px", borderRadius: "10px", background: "var(--input-bg)", border: "1px solid var(--glass-border)", color: "#fff", outline: "none" }}
                  >
                    <option value="todo" style={{color: "#000"}}>To Do</option>
                    <option value="in-progress" style={{color: "#000"}}>In Progress</option>
                    <option value="completed" style={{color: "#000"}}>Completed</option>
                  </select>
                  <button 
                    type="submit" 
                    style={{ 
                      margin: 0, 
                      padding: "10px 20px", 
                      fontSize: "14px", 
                      borderRadius: "10px", 
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)", 
                      border: "none", 
                      color: "#fff", 
                      fontWeight: "600",
                      cursor: "pointer" 
                    }}
                  >
                    + Add Task
                  </button>
                </form>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>

                <div className="card">
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px", display: "flex", justifyContent: "space-between" }}>
                    <span>To Do</span>
                    <span style={{ background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: "8px", fontSize: "11px" }}>{tasks.filter(t => t.status === 'todo').length}</span>
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    {tasks.filter(t => t.status === 'todo').map(task => (
                      <div key={task.id} style={{ background: "rgba(0, 0, 0, 0.2)", border: "1px solid var(--glass-border)", padding: "16px", borderRadius: "14px" }}>
                        <p style={{ fontSize: "13px", color: "var(--text-main)", margin: "0 0 10px 0", lineHeight: "1.4" }}>{task.text}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>⏱️ {task.due}</span>
                          <button 
                            onClick={() => handleToggleStatus(task.id, "in-progress")}
                            style={{ margin: 0, padding: "4px 10px", fontSize: "11px", borderRadius: "6px", background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.2)", fontWeight: "600", cursor: "pointer" }}
                          >
                            Start →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px", display: "flex", justifyContent: "space-between" }}>
                    <span>In Progress</span>
                    <span style={{ background: "rgba(14, 165, 233, 0.1)", padding: "2px 8px", borderRadius: "8px", fontSize: "11px" }}>{tasks.filter(t => t.status === 'in-progress').length}</span>
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    {tasks.filter(t => t.status === 'in-progress').map(task => (
                      <div key={task.id} style={{ background: "rgba(0, 0, 0, 0.2)", border: "1px solid var(--glass-border)", padding: "16px", borderRadius: "14px" }}>
                        <p style={{ fontSize: "13px", color: "var(--text-main)", margin: "0 0 10px 0", lineHeight: "1.4" }}>{task.text}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>⏱️ {task.due}</span>
                          <button 
                            onClick={() => handleToggleStatus(task.id, "completed")}
                            style={{ margin: 0, padding: "4px 10px", fontSize: "11px", borderRadius: "6px", background: "rgba(16,185,129,0.15)", color: "var(--success)", border: "1px solid rgba(16,185,129,0.2)", fontWeight: "600", cursor: "pointer" }}
                          >
                            Finish ✓
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--success)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px", display: "flex", justifyContent: "space-between" }}>
                    <span>Completed</span>
                    <span style={{ background: "rgba(16, 185, 129, 0.1)", padding: "2px 8px", borderRadius: "8px", fontSize: "11px" }}>{tasks.filter(t => t.status === 'completed').length}</span>
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    {tasks.filter(t => t.status === 'completed').map(task => (
                      <div key={task.id} style={{ background: "rgba(0, 0, 0, 0.2)", border: "1px solid var(--glass-border)", padding: "16px", borderRadius: "14px", opacity: 0.7 }}>
                        <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "0 0 10px 0", textDecoration: "line-through", lineHeight: "1.4" }}>{task.text}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>✓ Done</span>
                          <button 
                            onClick={() => handleToggleStatus(task.id, "todo")}
                            style={{ margin: 0, padding: "4px 10px", fontSize: "11px", borderRadius: "6px", background: "rgba(255,255,255,0.05)", color: "var(--text-muted)", border: "1px solid var(--glass-border)", cursor: "pointer" }}
                          >
                            Re-open
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div style={{ animation: "fadeIn 0.5s ease-out" }}>
              <div style={{ marginBottom: "35px" }}>
                <h1 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px", color: "var(--text-main)", textAlign: "left" }}>Productivity Analytics</h1>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>Insights and rating parameters of your assignments.</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginBottom: "40px" }}>
                <div className="card">
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>Work Score Rating</span>
                  <h3 style={{ fontSize: "36px", fontWeight: "800", color: "var(--primary)", margin: "10px 0" }}>92 / 100</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>Top 5% among user cohorts this month</p>
                </div>

                <div className="card">
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>Work Efficiency Ratio</span>
                  <h3 style={{ fontSize: "36px", fontWeight: "800", color: "var(--success)", margin: "10px 0" }}>99.1%</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>Tasks submitted before due date deadlines</p>
                </div>
              </div>

              <div className="card" style={{ padding: "35px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: "700", marginBottom: "25px", color: "var(--text-main)" }}>Monthly Task Delivery Timeline</h3>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "180px", padding: "0 10px" }}>
                  {[12, 18, 15, 24, 30, 22, 35].map((val, idx) => (
                    <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "9%" }}>
                      <div style={{ height: `${val * 4}px`, width: "100%", background: idx === 6 ? "linear-gradient(to top, var(--primary), var(--secondary))" : "rgba(255,255,255,0.05)", border: "1px solid var(--glass-border)", borderRadius: "6px", position: "relative" }}>
                        <span style={{ position: "absolute", top: "-22px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", fontWeight: "700", color: "var(--text-main)" }}>{val}</span>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{["W1", "W2", "W3", "W4", "W5", "W6", "Current"][idx]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <div style={{ animation: "fadeIn 0.5s ease-out" }}>
              <div style={{ marginBottom: "35px" }}>
                <h1 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px", color: "var(--text-main)", textAlign: "left" }}>Help & Support</h1>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>Have questions or ran into an error? Send us a ticket.</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "35px" }}>
                <div className="card">
                  {supportSubmitted ? (
                    <div style={{ textAlign: "center", padding: "30px 10px" }}>
                      <div style={{ fontSize: "40px", marginBottom: "15px" }}>📨</div>
                      <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--success)", marginBottom: "6px" }}>Ticket Dispatched Successfully!</h3>
                      <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>We've received your query and our team will get back to you within 2 hours.</p>
                      <button onClick={() => setSupportSubmitted(false)} style={{ marginTop: "15px", padding: "8px 18px", fontSize: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--glass-border)", color: "#fff", cursor: "pointer" }}>Send another message</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSupportSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600" }}>State your query or issue</label>
                        <textarea 
                          rows="4" 
                          required
                          value={supportMessage}
                          onChange={(e) => setSupportMessage(e.target.value)}
                          placeholder="Describe the bug, backend error, or question..."
                          style={{ padding: "14px 16px", borderRadius: "12px", background: "var(--input-bg)", border: "1px solid var(--glass-border)", color: "#fff", outline: "none", fontSize: "14px", fontFamily: "inherit", resize: "none" }}
                        />
                      </div>
                      <button 
                        type="submit" 
                        style={{ 
                          background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)", 
                          border: "none", 
                          padding: "12px 24px", 
                          borderRadius: "12px", 
                          color: "#fff", 
                          fontWeight: "600", 
                          fontSize: "14px",
                          cursor: "pointer", 
                          boxShadow: "0 4px 14px rgba(14, 165, 233, 0.4)",
                          width: "fit-content",
                          transition: "all 0.3s ease" 
                        }}
                      >
                        Submit Support Ticket
                      </button>
                    </form>
                  )}
                </div>

                <div className="card" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "700", margin: 0, color: "var(--text-main)" }}>Support Desk Info</h4>
                  <div>
                    <h5 style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-main)", margin: "0 0 4px 0" }}>Average Resolution Time</h5>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>1 hour and 42 minutes</p>
                  </div>

                  <div>
                    <h5 style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-main)", margin: "0 0 4px 0" }}>Developer Hotlines</h5>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>support@usercore-auth.com</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default UserDashboard;