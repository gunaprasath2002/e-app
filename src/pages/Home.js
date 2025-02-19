import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Banner1 from "./images/bannerhome.jpg";
import Banner2 from "./images/bannerhome1.jpg";
import Banner3 from "./images/bannerhome2.jpg";
import Banner4 from "./images/bannerhome3.jpg";
import Banner5 from "./images/bannerhome4.jpg";
import Banner6 from "./images/bannerhome5.jpg";
import "./home.css";

const BannerCarousel = () => {
  const navigate = useNavigate();

  const handleBannerClick = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  return (
    <nav>
      <Carousel className="guna" indicators={true} controls={true} 
        nextIcon={<span className="custom-arrow right-arrow">→</span>} 
        prevIcon={<span className="custom-arrow left-arrow">←</span>}
      >
        <Carousel.Item className="pp" onClick={() => handleBannerClick(1)}>
          <img className="d-block w-100 banner-img" src={Banner1} alt="Music Products" />
        </Carousel.Item>

        <Carousel.Item className="pp">
          <Link to="https://www.gadgets360.com/mobiles/realme-price-list">
            <img className="d-block w-100 banner-img" src={Banner2} alt="Electronics Deals" />
          </Link>
        </Carousel.Item>

        <Carousel.Item className="pp" onClick={() => handleBannerClick(3)}>
          <img className="d-block w-100 banner-img" src={Banner3} alt="Fashion Sale" />
        </Carousel.Item>

        <Carousel.Item className="pp" onClick={() => handleBannerClick(3)}>
          <img className="d-block w-100 banner-img" src={Banner4} alt="Fashion Sale" />
        </Carousel.Item>

        <Carousel.Item className="pp" onClick={() => handleBannerClick(3)}>
          <img className="d-block w-100 banner-img" src={Banner5} alt="Fashion Sale" />
        </Carousel.Item>

        <Carousel.Item className="pp" onClick={() => handleBannerClick(3)}>
          <img className="d-block w-100 banner-img" src={Banner6} alt="Fashion Sale" />
        </Carousel.Item>
      </Carousel>
    </nav>
  );
};

export default BannerCarousel;
