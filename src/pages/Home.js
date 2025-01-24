import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import "./home.css";

const BannerCarousel = () => {
  const navigate = useNavigate();

  // Function to handle banner click
  const handleBannerClick = (productId) => {
    navigate(`/product-details/${productId}`); // Navigate to the ProductDetails page with the productId
  };

  return (
    <nav>
  
    <Carousel>
      <Carousel.Item onClick={() => handleBannerClick(1)}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/sassy-goodlooking-redhead-female-yellow-sweater-listen-music-white-headphones-touch-earphones_1258-126219.jpg?ga=GA1.1.293462127.1735989792&semt=ais_hybrid"
          alt="Music Products"
          style={{ cursor: "pointer" }}
        />
        
      </Carousel.Item>

      <Carousel.Item onClick={() => handleBannerClick(2)}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/black-friday-concept-landing-page-template_1029473-10618.jpg?uid=R181942385&ga=GA1.1.293462127.1735989792&semt=ais_hybrid"
          alt="Electronics Deals"
          style={{ cursor: "pointer" }}
        />
        
      </Carousel.Item>

      <Carousel.Item onClick={() => handleBannerClick(3)}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833112.jpg?ga=GA1.1.293462127.1735989792&semt=ais_hybrid"
          alt="Fashion Sale"
          style={{ cursor: "pointer" }}
        />
        
      </Carousel.Item>
    </Carousel>
    </nav>
  );
};

export default BannerCarousel;
