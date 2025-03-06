import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login"; // Import CSS file

export default function Login() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			const response = await fetch("https://dd18-59-97-51-97.ngrok-free.app/ecom/login/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
				credentials: "include", // Ensures cookies (session ID) are stored
			});

			const data = await response.json();
			if (response.ok) {
				localStorage.setItem("token", data.token); // Store token for future requests
				navigate("/"); // Redirect user after login
			} else {
				setError(data.error || "Login failed. Please try again.");
			}
		} catch (error) {
			setError("Something went wrong. Please try again.");
		}
	};

	return (
		<div className="container login-container d-flex justify-content-center align-items-center">
			<motion.div
				className="row w-75 shadow rounded mt-3"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				{/* Left Side - Image */}
				<motion.div
					className="col-md-6 d-none d-md-block p-0"
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					<img
						src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?t=st=1740725761~exp=1740729361~hmac=70589d2676a662ff8ba7b94d8377d25e1c20b2e27273e9b8c15f20492813ecd6&w=900"
						alt="Login Illustration"
						className="img-fluid login-image"
					/>
				</motion.div>

				{/* Right Side - Login Form */}
				<motion.div
					className="col-md-6 col-12 d-flex justify-content-center align-items-center"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					<div className="login-box">
						<motion.h3
							className="text-center fs-3 mb-4"
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}
						>
							LOGIN
						</motion.h3>

						{error && <div className="alert alert-danger">{error}</div>}

						<form onSubmit={handleSubmit}>
							<motion.div
								className="mb-3"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.6, duration: 0.5 }}
							>
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

							<motion.div
								className="mb-3"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8, duration: 0.5 }}
							>
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
								Login
							</motion.button>
						</form>

						<motion.p
							className="text-center mt-3"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 0.5 }}
						>
							Don't have an account? <Link to="/signup">Sign Up</Link>
						</motion.p>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
