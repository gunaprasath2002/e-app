import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css"; // Import CSS file

export default function Signup() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/signup/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Signup successful! Redirecting to login...");
                setTimeout(() => navigate("/login"), 2000);
            } else {
                setError(data.error || "Signup failed. Please try again.");
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <motion.div 
            className="container signup-container d-flex justify-content-center align-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className="row w-75 shadow rounded mt-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left Side - Signup Form */}
                <motion.div 
                    className="col-md-6 col-12 d-flex justify-content-center align-items-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <div className="signup-box">
                        <motion.h3 
                            className="text-center fs-3 mb-4"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            SIGN UP
                        </motion.h3>

                        {error && <div className="alert alert-danger">{error}</div>}
                        {message && <div className="alert alert-success">{message}</div>}

                        <form onSubmit={handleSubmit}>
                            <motion.div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>

                            <motion.div className="mb-3">
                                <label htmlFor="email" className="form-label">E-Mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>

                            <motion.div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary w-100"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sign Up
                            </motion.button>
                        </form>

                        <motion.p className="text-center mt-3">
                            Already have an account? <Link to="/login">Login</Link>
                        </motion.p>
                    </div>
                </motion.div>
                
                {/* Right Side - Image */}
                <motion.div 
                    className="col-md-6 d-none d-md-block p-0"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <img
                        src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-3579.jpg?t=st=1740729622~exp=1740733222~hmac=2bbbc7af3ec32076a31c1e14c5a6e39f5271ca290ace57d341635e51327b43d2&w=900"
                        alt="Signup Illustration"
                        className="img-fluid signup-image"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
