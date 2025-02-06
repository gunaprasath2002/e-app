import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../pages/login.css';
import { FiMail, FiLock } from 'react-icons/fi';

const Login = () => {
    return (
        <Container fluid className="auth-container ">
            <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6} xl={5} className="p-3 p-sm-4">
                    <div className="auth-card p-5">
                        <h2 className="text-center mb-4">Login</h2>
                        <Form>
                            <Form.Group className="mb-4 position-relative">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                className="form-input py-2 py-sm-3"
                                style={{ minHeight: '45px' }}
                                />
                                
                                <FiMail className="input-icon" />
                            </Form.Group>

                            <Form.Group className="mb-4 position-relative">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className="form-input py-3"
                                />
                                <FiLock className="input-icon" />
                            </Form.Group>

                            <Button variant="primary" className="submit-btn w-90 mb-3" style={{ minHeight: '45px' }}>
                                Log In
                            </Button>

                            <div className="text-center mb-3">
                                <Link to="/forgot-password" className="auth-link text-decoration-none">
                                    Forgot Password?
                                </Link>
                            </div>

                            <div className="text-center mt-4">
                                <span className="text-muted">New here? </span>
                                <Link to="/signup" className="auth-link text-decoration-none">
                                    Create Account
                                </Link>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;