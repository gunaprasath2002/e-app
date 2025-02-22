import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@popperjs/core"; // Ensure Popper.js is loaded
import { Offcanvas } from "bootstrap"; // Explicitly import Offcanvas

import { BsGeoAlt, BsPersonCircle, BsCart3, BsSearch, BsList, BsArrowLeft, BsInfoCircle,BsTelephone, BsHouse } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CartContext, WishListContext } from "../App";
import "./header.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { wishItems } = useContext(WishListContext);
  const [showSearchBar, setShowSearchBar] = useState(false);

  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showSearchBar &&
        !event.target.closest(".search-container") &&
        !event.target.closest(".search-toggle")
      ) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showSearchBar]);

  // ✅ Initialize Bootstrap Offcanvas to prevent backdrop error
  useEffect(() => {
    const sidebar = document.getElementById("mobileSidebar");
    if (sidebar) {
      new Offcanvas(sidebar);
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container d-flex align-items-center justify-content-between flex-nowrap">
          {/* Left Side: Logo & Brand */}
          {!showSearchBar && (
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler d-block d-sm-none me-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileSidebar"
                aria-controls="mobileSidebar"
                style={{ border: "none", outline: "none", boxShadow: "none" }}
              >
                <BsList size={20} />
              </button>

              <Link className="navbar-brand d-flex align-items-center" to="/">
                <img
                  src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-financial-institution-logo-png-image_5922926.jpg"
                  alt="Logo"
                  style={{ width: "40px", marginRight: "5px" }}
                />
                <span className="text-dark fw-bold">BrandName</span>
              </Link>
            </div>
          )}

          {/* Search Bar */}
          <div className={`search-container flex-grow-1 ${showSearchBar ? "d-flex" : "d-none d-sm-flex"} mx-2`}>
            <form className="d-flex w-100 align-items-center">
              {showSearchBar && (
                <button
                  className="btn btn-light d-block d-sm-none me-2"
                  type="button"
                  onClick={() => setShowSearchBar(false)}
                >
                  <BsArrowLeft size={18} />
                </button>
              )}
              <div className="input-group search-box">
                <input className="form-control form-control-sm" type="search" placeholder="Search..." />
                <button className="btn btn-secondary btn-sm" type="submit"><BsSearch /></button>
              </div>
            </form>
          </div>

          {/* Right Side: Icons */}
          {!showSearchBar && (
            <div className="d-flex d-sm-none align-items-center gap-3">
              <button className="nav-link bg-transparent border-0 search-toggle" onClick={() => setShowSearchBar(true)}>
                <BsSearch size={20} className="text-dark" />
              </button>

              <Link to="/cart" className="nav-link position-relative">
                <BsCart3 size={20} className="text-dark" />
                {cartItems.length > 0 && (
                  <span
                    className="badge bg-danger rounded-pill position-absolute"
                    style={{ top: "-5px", left: "12px", fontSize: "0.6rem" }}
                  >
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          )}

          {/* Desktop Icons */}
          <ul className="navbar-nav d-none d-sm-flex flex-row align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <BsGeoAlt size={18} />
                <span className="d-none d-md-inline ms-1">Location</span>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/Wishlist" className="nav-link d-flex align-items-center">
                {wishItems.length > 0 ? <AiFillHeart size={18} className="text-danger" /> : <AiOutlineHeart size={18} className="text-muted" />}
                <span className="d-none d-md-inline ms-1">Wishlist</span>
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link to="/cart" className="nav-link d-flex align-items-center">
                <BsCart3 size={18} />
                {cartItems.length > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute" style={{ top: "-5px", left: "12px", fontSize: "0.6rem" }}>
                    {cartItems.length}
                  </span>
                )}
                <span className="d-none d-md-inline ms-1">Cart</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/Login">
                <BsPersonCircle size={18} />
                <span className="d-none d-md-inline ms-1">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        id="mobileSidebar"
        tabIndex="-1"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileSidebarLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <ul className="list-unstyled w-100">
            <li>
              <Link to="/" className="nav-link">
                <BsHouse className="me-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="/Wishlist" className="nav-link">
                <AiOutlineHeart className="me-2" /> Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link">
                <BsCart3 className="me-2" /> Cart
              </Link>
            </li>
            <li>
              <Link to="/Login" className="nav-link">
                <BsPersonCircle className="me-2" /> Profile
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                <BsGeoAlt className="me-2" /> Location
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                <BsInfoCircle className="me-2" /> About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                <BsTelephone className="me-2" /> Contact
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar;
