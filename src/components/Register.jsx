import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            // Save mock user to localStorage
            localStorage.setItem("registeredEmail", formData.email);
            localStorage.setItem("registeredPassword", formData.password);
            localStorage.setItem("registeredRole", formData.role);
            localStorage.setItem("registeredName", formData.name);

            alert("Registration Successful! Please log in.");
            setIsLoading(false);
            navigate("/login");
        }, 1000);
    };
    return (
        <div className="auth-container">
            <div className="auth-header-icon">
                <i className="bi bi-person-plus"></i>
            </div>
            <h1>Create an Account</h1>
            <p className="subtitle">Join Firebase Auth today</p>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <div className="input-wrapper">
                        <i className="bi bi-person"></i>
                        <input
                            id="name"
                            type="text"
                            placeholder="e.g. John Doe"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
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
                <div className="input-group">
                    <label htmlFor="role">Role</label>
                    <div className="input-wrapper">
                        <i className="bi bi-person-badge"></i>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="user" style={{ color: "#000" }}>User</option>
                            <option value="admin" style={{ color: "#000" }}>Admin</option>
                        </select>
                    </div>
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Signing Up...
                        </>
                    ) : "Sign Up"}
                </button>
                <div className="auth-footer">
                    <p>
                        Already have an account?
                        <Link to="/login">Sign In</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
export default Register;