import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaHeadphones, FaBars } from "react-icons/fa";
import { useNavigate,Link } from "react-router-dom";
import {motion,AnimatePresence} from "framer-motion"; // Import Framer Mot
import "./header.css";
import { FaTag } from "react-icons/fa";
import TopHeader from "./TopHeader";
import {category} from "./Datas";

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


const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};




const BottomNavbar = () => {
// Controls whether the entire dropdown is visible on hover
const [hoveredMain, setHoveredMain] = useState(false);

// Which category is currently expanded (clicked) in the left column
const [expandedCategory, setExpandedCategory] = useState(null);

// Which subcategory is currently expanded (clicked) in the middle column
const [expandedSubcategory, setExpandedSubcategory] = useState(null);

const [openDropdown, setOpenDropdown] = useState(null);

const [selectedCategory, setSelectedCategory] = useState(null);

const navigate = useNavigate();

// Toggle main category expansion
const handleCategoryClick = (categoryTitle) => {
  if (expandedCategory === categoryTitle) {
    setExpandedCategory(null);
    setExpandedSubcategory(null);
  } else {
    setExpandedCategory(categoryTitle);
    setExpandedSubcategory(null);
  }
};

// Toggle subcategory expansion
const handleSubcategoryClick = (subcategoryTitle) => {
  if (expandedSubcategory === subcategoryTitle) {
    setExpandedSubcategory(null);
  } else {
    setExpandedSubcategory(subcategoryTitle);
  }
};

// Get the active category and subcategory objects
const activeCategory = categories.find(
  (cat) => cat.title === expandedCategory
);
const activeSubcategory = activeCategory?.subcategories.find(
  (sub) => sub.title === expandedSubcategory
);
 

  return (
    <>

<TopHeader />
{/* <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      > */}
<Navbar expand="lg" className="w-100 border-top py-0 sticky-top shadow-sm" style={{ backgroundColor: "#f6faff" }}>
        <Container fluid>
          <Navbar.Toggle aria-controls="bottom-navbar" className="mx-auto">
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="bottom-navbar">
          <Nav className="me-auto position-relative">
              {/* Main Category Button */}
              <div
                className="category-menu"
                onMouseEnter={() => setHoveredMain(true)}
                onMouseLeave={() => {
                  setHoveredMain(false);
                  setExpandedCategory(null);
                  setExpandedSubcategory(null);
                }}
              >
                <button className="category-btn">📂 Shop by Category</button>

                <AnimatePresence>
                  {hoveredMain && (
                    <motion.div
                      className="dropdown-menu-custom"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="columns-wrapper">
                        {/* LEFT COLUMN: Main Categories */}
                        <div className="column main-column">
                          {categories.map((category, index) => {
                            const isExpanded =
                              expandedCategory === category.title;
                            return (
                              <div
                                key={index}
                                className={`dropdown-item-custom ${
                                  isExpanded ? "active" : ""
                                }`}
                                onClick={() =>
                                  handleCategoryClick(category.title)
                                }
                              >
                                <span>{category.title}</span>
                                {category.subcategories?.length > 0 && (
                                  <span className="arrow">
                                    {isExpanded ? "▼" : "▶"}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* MIDDLE COLUMN: Subcategories (visible only if a main category is clicked) */}
                        {activeCategory && (
                          <div className="column sub-column">
                            {activeCategory.subcategories.map((sub, i) => {
                              const subIsExpanded =
                                expandedSubcategory === sub.title;
                              return (
                                <div
                                  key={i}
                                  className={`sub-dropdown-item ${
                                    subIsExpanded ? "active" : ""
                                  }`}
                                  onClick={() => handleSubcategoryClick(sub.title)}
                                >
                                  <span>{sub.title}</span>
                                  {sub.subcategories?.length > 0 && (
                                    <span className="arrow">
                                      {subIsExpanded ? "▼" : "▶"}
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* RIGHT COLUMN: Sub‑subcategories (visible only if a subcategory is clicked) */}
                        {activeSubcategory && (
                          <div className="column sub-sub-column">
                            {activeSubcategory.subcategories.map((item, j) => (
                              <div
                                key={j}
                                className="sub-sub-dropdown-item"
                                onClick={() =>
                                  navigate(
                                    `/${activeCategory.title
                                      .toLowerCase()
                                      .replace(/ /g, "-")}/${
                                      activeSubcategory.title
                                        .toLowerCase()
                                        .replace(/ /g, "-")
                                    }/${item.toLowerCase().replace(/ /g, "-")}`
                                  )
                                }
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Nav>



   

            {/* Other Nav Items */}
            
            <Nav className="me-auto align-items-center">
        <Nav.Link href="/">Home</Nav.Link>
        {category &&
          category.map((cat, index) => (
            <NavDropdown
              key={index}
              title={
                <>
                  {cat.name}
                </>
              }
              show={openDropdown === index}
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
              onClick={() => {
                setSelectedCategory(cat); // Store the selected category
                setOpenDropdown(null); // Close dropdown
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="dropdown-menu-columns p-3 text-center"
              >
                <div className="d-flex justify-content-center flex-wrap">
                  {cat.subcategories.map((sub, subIndex) => (
                    <motion.div
                      key={subIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                      className={`subcategory-column column-${subIndex % 5} text-center`}
                    >
                      <strong className="subcategory-title">
                        <FaTag className="me-2" /> {sub.title}
                      </strong>
                      {sub.links.map((link, linkIndex) => (
                        <NavDropdown.Item
                          key={linkIndex}
                          href={link.path}
                          className="animated-link"
                        >
                          {link.name}
                        </NavDropdown.Item>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </NavDropdown>
          ))}
      </Nav>

      {/* Center Page Subcategories */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="center-subcategories mt-5 text-center"
        >
          <h2>
            <FaTag className="me-2" /> {selectedCategory.name}
          </h2>
          <div className="d-flex justify-content-center flex-wrap">
            {selectedCategory.subcategories.map((sub, subIndex) => (
              <motion.div
                key={subIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                className="subcategory-box p-3 m-2"
              >
                <strong className="subcategory-title">
                  <FaTag className="me-2" /> {sub.title}
                </strong>
                {sub.links.map((link, linkIndex) => (
                  <Nav.Link key={linkIndex} href={link.path} className="animated-link">
                    {link.name}
                  </Nav.Link>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    



    






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
      {/* </motion.nav> */}

         {/* Inline Styles */}
      <style>
        {`
        .category-menu {
          position: relative;
        }
        .category-btn {
          color:rgb(0, 151, 35);
          background-color: #f6faff;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s;
        }
        .category-btn:hover {
          color:rgb(247, 142, 14);
        }
        .dropdown-menu-custom {
          position: absolute;
          top: 40px;
          left: 0;
          background: white;
          border: 1px solid #ddd;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          padding: 10px;
        }
        .columns-wrapper {
          display: flex;
          gap: 20px;
          min-width: 600px;
        }
        .column {
          min-width: 180px;
          border-right: 1px solid #eee;
        }
        .column:last-child {
          border-right: none;
        }
        .dropdown-item-custom,
        .sub-dropdown-item,
        .sub-sub-dropdown-item {
          padding: 8px;
          cursor: pointer;
          transition: background 0.3s;
          border-radius: 4px;
          margin-bottom: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .dropdown-item-custom:hover,
        .sub-dropdown-item:hover,
        .sub-sub-dropdown-item:hover {
          background: #f8f9fa;
        }
        .dropdown-item-custom.active,
        .sub-dropdown-item.active {
          background-color: #e0e7ff;
          color: #1e40af;
          font-weight: 600;
        }
        .arrow {
          margin-left: 8px;
          font-size: 0.9em;
        }
        /* Additional hover effect on Nav.Link */
        .nav-link-custom:hover {
          background-color: #f8f9fa;
          border-radius: 4px;
        }
        `}
      </style>
    </>
  );
};

export default BottomNavbar;
