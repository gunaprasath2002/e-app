import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";

const LoginPage = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation for email or mobile number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    const mobileRegex = /^[6-9]\d{9}$/; // Mobile number regex (10 digits, starting with 6-9)

    if (!emailOrMobile || !password) {
      setErrorMessage("Please fill in all fields.");
    } else if (
      !emailRegex.test(emailOrMobile) &&
      !mobileRegex.test(emailOrMobile)
    ) {
      setErrorMessage("Please enter a valid email address or mobile number.");
    } else {
      setErrorMessage("");
      alert("Login Successful!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmailOrMobile" className="mb-3">
            <Form.Label>Email Address or Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email or mobile number"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;
