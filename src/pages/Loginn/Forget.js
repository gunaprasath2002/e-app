import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import { FiMail, FiLock, FiSmartphone } from 'react-icons/fi';

const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSendOtp = (e) => {
        e.preventDefault();
        // Add your OTP sending logic here
        setEmailSent(true);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Add your password reset logic here
    };

    return (
        <Container fluid className="auth-container">
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6} xl={5} className="p-3 p-sm-4">
                    <div className="auth-card p-4 p-sm-5">
                        <h2 className="text-center mb-4">Reset Password</h2>
                        
                        {!emailSent ? (
                            <Form onSubmit={handleSendOtp}>
                                <Form.Group className="mb-4 position-relative">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        className="form-input py-2 py-sm-3"
                                        style={{ minHeight: '45px' }}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <FiMail className="input-icon" />
                                </Form.Group>

                                <Button 
                                    variant="primary" 
                                    className="submit-btn w-90 mb-3"
                                    style={{ minHeight: '45px' }}
                                    type="submit"
                                >
                                    Send OTP
                                </Button>

                                <div className="text-center mt-4">
                                    <Link to="/login" className="auth-link text-decoration-none">
                                        ← Back to Login
                                    </Link>
                                </div>
                            </Form>
                        ) : (
                            <Form onSubmit={handleResetPassword}>
                                <div className="slide-in">
                                    <Form.Group className="mb-4 position-relative">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter OTP"
                                            className="form-input py-2 py-sm-3"
                                            style={{ minHeight: '45px' }}
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                            pattern="\d{6}"
                                        />
                                        <FiSmartphone className="input-icon" />
                                        <small className="text-muted d-block mt-1">Check your email for OTP</small>
                                    </Form.Group>

                                    <Form.Group className="mb-4 position-relative">
                                        <Form.Control
                                            type="password"
                                            placeholder="New Password"
                                            className="form-input py-2 py-sm-3"
                                            style={{ minHeight: '45px' }}
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                            minLength="8"
                                        />
                                        <FiLock className="input-icon" />
                                    </Form.Group>

                                    <Button 
                                        variant="primary" 
                                        className="submit-btn w-90 mb-3"
                                        style={{ minHeight: '45px' }}
                                        type="submit"
                                    >
                                        Reset Password
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;