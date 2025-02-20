import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BsGeoAlt, BsHeart, BsPersonCircle, BsCart3 } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CartContext, WishListContext } from "../App"; // Importing Cart and Wishlist contexts";


const Navbar = () => {
   const { cartItems } = useContext(CartContext);
   const { wishItems } = useContext(WishListContext); // Fetching wishlist context

   return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo and Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-financial-institution-logo-png-image_5922926.jpg"
            alt="Logo"
            style={{ width: '50px', marginRight: '8px' }}
          />
          <span>BrandName</span>
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search Bar */}
          <form className="d-flex mx-auto my-2 my-lg-0 w-100" style={{ flexGrow: 1 }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success pt-0" type="submit">
              Search
            </button>
          </form>

          {/* Right-side Icons */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <BsGeoAlt className="me-1" /> 
                <span className="d-none d-lg-inline">Location</span>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/Wishlist">
                {wishItems.length > 0 ? <AiFillHeart className="me-1 text-danger" /> : <AiOutlineHeart className="me-1 text-muted" />}
                <span className="d-none d-lg-inline">Wishlist</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link d-flex align-items-center position-relative">  
                <BsCart3 className="me-1"/>
                {/* Show badge only if cartItems.length > 0 */}
                {cartItems.length > 0 && (
                  <span 
                    className="badge bg-danger rounded-pill position-absolute" 
                    style={{ top: "2", left: "10px", transform: "translate(80%, -8%)", fontSize: "0.60rem" }}
                  >
                    {cartItems.length}
                  </span> 
                )}
                <span className="d-none d-lg-inline">Cart</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/Login">
                <BsPersonCircle className="me-1" /> 
                <span className="d-none d-lg-inline">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
