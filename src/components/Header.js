import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./header.css";
import otpImg from "../images/otp.png";
import { FaOpencart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [location, setLocation] = useState("Select Location"); // Store selected location
  const navigate = useNavigate();

  const locations = ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Karnataka", "Telugana"];

  return (
    <>
      <Navbar bg="white" variant="white" expand="lg" sticky="top" className="py-2">
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center me-5 p-0">
          <img
            src={otpImg}
            alt="E-COM360"
            width="30"
            height="30"
            className="d-inline-block align-top me-1"
          />
          <span className="text-dark">E-COM360</span>
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
              <i className="bi bi-geo-alt-fill me-1 text-success"></i>
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
              <span className="text-dark">Wishlist</span>
            </Nav.Link>
          </Nav>

          {/* Login Button */}
          <Nav className="btn btn-outline-none p-0 m-1">
            <Nav.Link onClick={() => navigate("/login")} className="d-flex align-items-center me-3">
              <i className="bi bi-person-circle me-1"></i>
              <span className="text-dark">Login</span>
            </Nav.Link>
          </Nav>

          {/* Cart Icon */}
          <Nav className="btn btn-none p-0 m-3">
            <Nav.Link href="/cart" variant="outline-none" className="d-flex align-items-center me-3">
              <i className="bi bi-cart-fill me-1"></i>
              <span className="text-dark">Cart</span>
              <FaOpencart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
