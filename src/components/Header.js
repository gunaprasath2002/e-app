import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Offcanvas, Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./header.css";
import otpImg from "../images/otp.png";
import { FaOpencart } from "react-icons/fa";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";

const Header = () => {
  const [show, setShow] = useState(false); // Manage offcanvas visibility
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup forms
  const [location, setLocation] = useState("Select Location"); // Store selected location

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleToSignup = () => setIsLogin(false);
  const toggleToLogin = () => setIsLogin(true);

  const locations = ["Nambiyur", "Gobi", "Anthiyur", "Sathy", "Covai"];

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-2">
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center me-5 p-0">
          <img
            src={otpImg}
            alt="E-COM360"
            width="30"
            height="30"
            className="d-inline-block align-top me-1"
          />
          <span className="text-blue">E-COM360</span>
        </Navbar.Brand>

        {/* Responsive Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search Bar */}
          <Form className="d-flex align-items-center me-5 w-100">
            <FormControl
              type="search"
              placeholder="🔍Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          {/* Location Dropdown */}
          <Dropdown className="me-4">
            <Dropdown.Toggle variant="outline-none" id="location-dropdown">
              <i className="bi bi-geo-alt-fill me-1"></i>
              {location}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {locations.map((place, index) => (
                <Dropdown.Item key={index} onClick={() => setLocation(place)}>
                  {place}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Wishlist Icon */}
          <Nav>
            <Nav.Link href="/wishlist" className="d-flex align-items-center me-3">
              <i className="bi bi-heart-fill me-1 text-danger"></i>
              <span className="text-blue">Wishlist</span>
            </Nav.Link>
          </Nav>

          {/* Login Button */}
          <Nav className="btn btn-outline-primary p-0 m-1">
            <Nav.Link onClick={handleShow} className="d-flex align-items-center me-3">
              <i className="bi bi-person-circle me-1"></i>
              <span className="text-white">Login</span>
            </Nav.Link>
          </Nav>

          {/* Cart Icon */}
          <Nav className="btn btn-outline-primary p-0 m-3">
            <Nav.Link href="/cart" variant="outline-info" className="d-flex align-items-center me-3">
              <i className="bi bi-cart-fill me-1"></i>
              <span className="text-white">Cart</span>
              <FaOpencart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Offcanvas for Login/Signup */}
      <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-custom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{isLogin ? "Login👽" : "Sign Up"}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isLogin ? (
            <>
              <LoginPage />
              <p className="mt-3 text-center">
                Don't have an account?{" "}
                <button className="btn btn-link p-0" onClick={toggleToSignup}>
                  Sign Up
                </button>
              </p>
            </>
          ) : (
            <>
              <SignupPage />
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <button className="btn btn-link p-0" onClick={toggleToLogin}>
                  Login
                </button>
              </p>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
