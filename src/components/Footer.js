import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import "./footer.css";
import otpImg from "../images/otp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4">
      <Container>
        {/* Main Footer Content */}
        <Row>
          {/* Company Info */}
          <Col md={4} sm={12} className="mb-4">
            <h5>E-Shop</h5>
            <p>
              Your go-to platform for the latest trends and products.
              Shop conveniently and securely with us!
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={6} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
              
                <Link to="/" className="text-blue text-decoration-none">
                  Home
                </Link>
              
              </li>
              
              <li>
                <Link to="/about" className="text-blue text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="textblue text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} sm={6} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              Email: ecom360@gmail.com <br />
              Phone: 9944068447 <br />
              Address: 123 E-shop, Kullampalayam, Gobi.
            </p>

            <div>
              <h5>Follow Us</h5>
              <a href="#" className="text-white text-decoration-none me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Country Links */}
        <Row className="text-center">
          <Col>
            <div className="mt-4">
              <div className="d-flex justify-content-center flex-wrap">
                <img src={otpImg} className="img-fluid mb-3" style={{ width: "80px" }} alt="Logo" />
              </div>
              <div className="amazon-countries mt-3 mx-auto">
                {[
                  "Australia",
                  "Brazil",
                  "Canada",
                  "China",
                  "France",
                  "Germany",
                  "Italy",
                  "Japan",
                  "Mexico",
                  "Netherlands",
                  "Poland",
                  "Singapore",
                  "Spain",
                  "Turkey",
                  "United Arab Emirates",
                  "United Kingdom",
                  "United States",
                ].map((country, index) => (
                  <Link
                    key={index}
                    to=""
                    className="text-blue text-decoration-none px-1"
                  >
                    {country}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer Policies */}
        <Row className="mt-4">
          <Col className="text-center">
            <div className="amazon-footer-section-two py-3">
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {/* Flex-wrap ensures elements wrap on smaller screens */}
                <p className="mb-0">Conditions of Use & Sale</p>
                <p className="mb-0">Privacy Notice</p>
                <p className="mb-0">Interest-Based Ads</p>
              </div>
            </div>
            <p className="mb-0 mt-2">
              © {new Date().getFullYear()} E-Shop. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
