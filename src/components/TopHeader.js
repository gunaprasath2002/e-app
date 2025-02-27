import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@popperjs/core"; // Ensure Popper.js is loaded
import { Offcanvas } from "bootstrap"; // Explicitly import Offcanvas
import { Modal, Button } from "react-bootstrap"; 


import { BsGeoAlt, BsPersonCircle, BsCart3, BsSearch, BsList, BsArrowLeft, BsInfoCircle,BsTelephone, BsHouse } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CartContext, WishListContext } from "../App";
import "./header.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { wishItems } = useContext(WishListContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const[showLocationModal, setShowLocationModal] = useState(false);
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState("Location");

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

    
  
    
  // Example valid pincodes
  const validPincodes = {
    "560001": "Bangalore",
    "110001": "Delhi",
    "400001": "Mumbai",
  };

  // Function to validate Pincode
  const validatePincode = () => {
    if (!pincode) {
      setError("⚠️ Please enter a valid pincode.");
    } else if (!/^\d{6}$/.test(pincode)) {
      setError("❌ Pincode must be 6 digits.");
    } else if (!validPincodes[pincode]) {
      setError(`❌ Pincode not serviceable.`);
      alert(`Pincode ${pincode} is not serviceable.`);
    } else {
      setError("");
      const location = validPincodes[pincode]; // Update navbar
      alert(`✅ Pincode accepted! Location: ${validPincodes[pincode]}`);
      setUserLocation(location); // Update navbar
      setShowLocationModal(false);
    }
  };


  // Function to get user location
  const locateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
  
          // Backend API URL
          const apiUrl = "https://031b-59-97-51-97.ngrok-free.app/store/detect-location/";
  
          // Request payload
          const requestData = {
            latitude: latitude,
            longitude: longitude,
          };
  
          // Send POST request to backend
          fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Server Response:", data);
  
              if (data.location) {
                setUserLocation(data.location); // Update navbar with location
                alert(`📍 Location Found: ${data.location}`);
              } else {
                alert("⚠️ Unable to fetch location data.");
              }
              
              setShowLocationModal(false);
            })
            .catch((error) => {
              console.error("Error fetching location:", error);
              alert("❌ Failed to fetch location. Try again.");
            });
        },
        () => {
          alert("⚠️ Location access denied. Please enable location services.");
        }
      );
    } else {
      alert("❌ Geolocation not supported.");
    }
  };
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
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
                <button className="btn btn-sm" type="submit"><BsSearch /></button>
              </div>
            </form>
          </div>

          {/* Right Side: Icons */}
          {!showSearchBar && (
            <div className="d-flex d-sm-none align-items-center gap-3">
              <button className="nav-link bg-transparent border-0 search-toggle" onClick={() => setShowSearchBar(true)}>
                <BsSearch size={20} className="text-dark" />
              </button>
              

              <button className="nav-link bg-transparent border-0" onClick={() => setShowLocationModal(true)}>
                <BsGeoAlt size={20} className="text-dark" />
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
              <button className="nav-link bg-transparent border-0 d-flex align-items-center" onClick={()=> setShowLocationModal(true)}>
                <BsGeoAlt size={18} />
                <span className="d-none d-md-inline ">{userLocation}</span>
              </button>
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
                <BsCart3 className="me-2" /> Cart({cartItems.length})
              </Link>
            </li>
            <li>
              <Link to="/Login" className="nav-link">
                <BsPersonCircle className="me-2" /> Profile
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link" onClick={(e) => { e.preventDefault(); setShowLocationModal(true); }}>
               <BsGeoAlt className="me-2" /> {userLocation}
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <BsInfoCircle className="me-2" /> About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                <BsTelephone className="me-2" /> Contact
              </Link>
            </li>
          </ul>

        </div>
      


        <Modal show={showLocationModal} onHide={() => setShowLocationModal(false)} centered size="sm">
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold text-start text-success w-100">E-Com 360</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
      

        {/* Location Image */}

        <img 
          src="https://cdn-icons-png.flaticon.com/512/535/535137.png" 
          alt="Location Icon" 
          className="mb-2 py-0 mb-3"  
          style={{ width: "120px",opacity: "0.8" }} 
        />
        

         {/* Select a Product */}
         <p className="fw-bold mb-2">Select a Delivery Pincode to see the product Availability</p>
         <hr />
           {/* Locate Me Button - Above */}
        <button className="btn btn-primary w-90 py-2 mb-3" onClick={locateUser}>
          📍 Locate Me
        </button>

       
        
        {/* Pincode Input */}
        <input 
          type="text" 
          className="form-control text-center mb-2 p-2 rounded" 
          placeholder="Enter your Pincode" 
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          required
        />
        
        {/* Error Message */}
        {error && <p className="text-danger small">{error}</p>}

        {/* Apply Button */}
        <Button 
          variant="dark" 
          className="w-90 py-2 mt-2" 
          onClick={validatePincode}
        >
          ✅ Apply Location
        </Button>
      </Modal.Body>
    </Modal>


      </div>
    </>
  );
};

export default Navbar;
