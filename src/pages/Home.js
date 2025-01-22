import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './home.css';

const BannerCarousel = () => {
  const navigate = useNavigate();

  const handleBannerClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <Carousel>
      <Carousel.Item onClick={() => handleBannerClick('/music')}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/sassy-goodlooking-redhead-female-yellow-sweater-listen-music-white-headphones-touch-earphones_1258-126219.jpg?ga=GA1.1.293462127.1735989792&semt=ais_hybrid"
          alt="First slide"
          style={{ cursor: 'pointer' }}
        />
      </Carousel.Item>

      <Carousel.Item onClick={() => handleBannerClick('/sale')}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/black-friday-concept-landing-page-template_1029473-10618.jpg?uid=R181942385&ga=GA1.1.293462127.1735989792&semt=ais_hybrid"
          alt="Second slide"
          style={{ cursor: 'pointer' }}
        />
      </Carousel.Item>

      <Carousel.Item onClick={() => handleBannerClick('/offers')}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833112.jpg?ga=GA1.1.293462127.1735989792&semt=ais_hybrid"
          alt="Third slide"
          style={{ cursor: 'pointer' }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerCarousel;
