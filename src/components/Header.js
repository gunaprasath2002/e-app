import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Modal,
  ListGroup,
  NavDropdown,
  Offcanvas
} from "react-bootstrap";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaMapMarkerAlt,
  FaHeadphones,
  FaBars
} from "react-icons/fa";
import Logo from "../images/logo1.avif";
import "../components/header.css";

const TopHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowLocationModal(false);
  };

  return (
    <>
     <Navbar bg="light" expand="lg" className="shadow-sm w-100 py-2">
        <Container fluid className="d-flex align-items-center justify-content-between">
          {isMobile ? (
            <div className="d-flex align-items-center w-100 justify-content-between">
              <Button variant="outline-success" onClick={() => setShowSidebar(true)}>
                <FaBars size={20} />
              </Button>
              <Navbar.Brand href="/">
                <img src={Logo} alt="Shopstic Logo" width="80" height="80" />
                <span className="text-dark">E-shop</span>

              </Navbar.Brand>
              <Nav.Link href="/cart" className="position-relative me-3">
                <FaShoppingCart size={20} />
                <span className="badge bg-success position-absolute top-0 center-100 translate-middle">0</span>
              </Nav.Link>
            </div>
          ) : (
            <>
              <Navbar.Brand href="/" className="me-3">
                <img src={Logo} alt="Shopstic Logo" width="70" />
                <span className="text-dark">E-shop</span>

              </Navbar.Brand>
              <Button variant="outline-none" className="me-3" onClick={() => setShowLocationModal(true)}>
                <FaMapMarkerAlt /> {selectedLocation}
              </Button>
              <Form className="d-flex w-50">
                <FormControl type="search" placeholder="Search for items..." className="me-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav.Link href="/wishlist" className="position-relative me-3">
              <span className="badge bg-success position-absolute top-1 center-90 translate-middle">0</span>

                <FaHeart size={20} /> 
                Wishlist
              </Nav.Link>
              <Nav.Link href="/cart" className="position-relative me-3">
              <span className="badge bg-success position-absolute top-1 center-100 translate-middle">0</span>

                <FaShoppingCart size={20} />
                Cart
              </Nav.Link>
              <Nav.Link href="/login" className="me-3">
                <FaUser size={20} /> Account
              </Nav.Link>
            </>
          )}
        </Container>
      </Navbar>

      {isMobile && (
        <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           
            <Button variant="outline-success" className="mb-3 w-100" onClick={() => setShowLocationModal(true)}>
              <FaMapMarkerAlt /> {selectedLocation}
            </Button>
            <Form className="d-flex mb-3">
              <FormControl type="search" placeholder="Search for items..." className="me-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link href="/wishlist" className="mb-3">
              <FaHeart size={20} /> Wishlist
            </Nav.Link>
         
            <Nav.Link href="/login">
              <FaUser size={20} /> Account
            </Nav.Link>
          </Offcanvas.Body>
        </Offcanvas>
      )}

      <Modal show={showLocationModal} onHide={() => setShowLocationModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Your Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type="search" placeholder="Search for a city..." className="mb-3" />
          <h6>Popular Locations</h6>
          <ListGroup>
            <ListGroup.Item action onClick={() => handleLocationSelect("New York")}>New York</ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLocationSelect("Los Angeles")}>Los Angeles</ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLocationSelect("Chicago")}>Chicago</ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLocationSelect("San Francisco")}>San Francisco</ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLocationSelect("Miami")}>Miami</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};
const BottomNavbar = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" className="w-100 border-top py-2 sticky-top">
      <Container fluid>
        <Navbar.Toggle aria-controls="bottom-navbar "   className="mx-auto " />
        <Navbar.Collapse id="bottom-navbar" > 
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
  );
};

const Header = () => {
  return (
    <>
      <TopHeader />
      <BottomNavbar />
    </>
  );
};

export default Header; 