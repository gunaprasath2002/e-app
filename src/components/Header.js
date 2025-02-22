import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaHeadphones, FaBars } from "react-icons/fa";
import "./header.css";
import TopHeader from "./TopHeader";

const categories = [
  {
    title: "Electronics & Gadgets",
    subcategories: [
      {
        title: "Mobiles & Tablets",
        subcategories: ["Android Mobile Phone", "iPhone", "Basic Mobile Phones", "Tablets", "Mobile Accessories"],
      },
      {
        title: "Home Entertainment",
        subcategories: ["Televisions", "DVD Players & Recorders", "DTH", "Home Theater Systems", "Home Audio"],
      },
    ],
  },
  {
    title: "Home, Kitchen & Garden",
    subcategories: [
      {
        title: "Appliances",
        subcategories: ["Air Conditioners", "Refrigerators", "Washing Machines & Dryers", "Geysers"],
      },
    ],
  },
  {
    title: "Fashion",
    subcategories: [
      { title: "Men", subcategories: ["Clothing", "Footwear", "Watches"] },
      { title: "Women", subcategories: ["Clothing", "Jewelry", "Handbags"] },
    ],
  },
];

const BottomNavbar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  return (
    <>
      <TopHeader />
      <Navbar bg="white" variant="light" expand="lg" className="w-100 border-top py-0 sticky-top shadow-sm">
        <Container fluid>
          <Navbar.Toggle aria-controls="bottom-navbar" className="mx-auto">
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="bottom-navbar">
            {/* Categories Dropdown */}
            <Nav className="me-auto position-relative">
              <div className="category-menu">
                <div
                  className="category-dropdown"
                  onMouseEnter={() => setHoveredCategory("categories")}
                  onMouseLeave={() => {
                    setHoveredCategory(null);
                    setHoveredSubcategory(null);
                  }}
                >
                  <button className="category-btn">📂 Shop by Category</button>
                  {hoveredCategory === "categories" && (
                    <div className="dropdown-menu-custom">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="dropdown-item-custom"
                          onMouseEnter={() => setHoveredCategory(category.title)}
                        >
                          {category.title} ▶
                          {hoveredCategory === category.title && (
                            <div
                              className="sub-dropdown-menu"
                              onMouseLeave={() => setHoveredSubcategory(null)}
                            >
                              {category.subcategories.map((sub, i) => (
                                <div
                                  key={i}
                                  className="sub-dropdown-item"
                                  onMouseEnter={() => setHoveredSubcategory(sub.title)}
                                >
                                  {sub.title} ▶
                                  {hoveredSubcategory === sub.title && (
                                    <div className="sub-sub-dropdown-menu">
                                      {sub.subcategories.map((item, j) => (
                                        <div key={j} className="sub-sub-dropdown-item">
                                          {item}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Nav>

            {/* Other Nav Items */}
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

            {/* Contact */}
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

      {/* Styles */}
      <style>
        {`
        .category-menu {
          position: relative;
        }
        .category-btn {
          background-color: #0044cc;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s;
          border-radius: 5px;
        }
        .category-btn:hover {
          background-color: #0033aa;
        }
        .dropdown-menu-custom {
          position: absolute;
          top: 40px;
          left: 0;
          background: white;
          border: 1px solid #ddd;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          min-width: 250px;
          z-index: 1000;
          padding: 5px 0;
        }
        .dropdown-item-custom {
          padding: 10px;
          cursor: pointer;
          transition: background 0.3s;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .dropdown-item-custom:hover {
          background: #f8f9fa;
        }
        .sub-dropdown-menu {
          position: absolute;
          left: 100%;
          top: 0;
          background: white;
          border: 1px solid #ddd;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          min-width: 250px;
          padding: 5px 0;
        }
        .sub-dropdown-item {
          padding: 10px;
          cursor: pointer;
          transition: background 0.3s;
          display: flex;
          justify-content: space-between;
        }
        .sub-dropdown-item:hover {
          background: #f8f9fa;
        }
        .sub-sub-dropdown-menu {
          position: absolute;
          left: 100%;
          top: 0;
          background: white;
          border: 1px solid #ddd;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          padding: 5px 0;
        }
        .sub-sub-dropdown-item {
          padding: 8px 10px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .sub-sub-dropdown-item:hover {
          background: #f1f1f1;
        }
        `}
      </style>
    </>
  );
};

export default BottomNavbar;
