import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown
} from "react-bootstrap";
import { FaHeadphones } from "react-icons/fa";
import "./header.css";
import TopHeader from "./TopHeader";


const BottomNavbar = () => {
  return (
    <>
   <TopHeader />
    <Navbar bg="white" variant="light" expand="lg" className="w-100 border-top py-0 sticky-top">
      <Container fluid>
        <Navbar.Toggle aria-controls="bottom-navbar " className="mx-auto " />
        <Navbar.Collapse id="bottom-navbar"> 
          <Nav className="me-auto">
            <NavDropdown title="Browse All Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/lap">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="/mob">Mobiles</NavDropdown.Item>
              <NavDropdown.Item href="/fas">Fashion</NavDropdown.Item>
              <NavDropdown.Item href="/foot">Footwear</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Fashion">
              <NavDropdown.Item href="/men">Men</NavDropdown.Item>
              <NavDropdown.Item href="/women">Women</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Electronics">
              <NavDropdown.Item href="/mob">Mobiles</NavDropdown.Item>
              <NavDropdown.Item href="/lap">Laptops</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/bag">Bags</Nav.Link>
            <Nav.Link href="/foot">Footwear</Nav.Link>
            <Nav.Link href="/gro">Groceries</Nav.Link>
            <Nav.Link href="/bea">Beauty</Nav.Link>
            <NavDropdown title="Shop">
              <NavDropdown.Item href="/offer">Offers</NavDropdown.Item>
              <NavDropdown.Item href="/new">New Arrivals</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-3">
            <Nav.Link href="/contact">
              <FaHeadphones size={20} /> <span className="text-success fw-bold">1900 - 888</span>
              <br />
              <small>24/7 Support</small>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
  
};

export default BottomNavbar;
