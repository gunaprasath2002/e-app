import React, { useEffect, useState } from "react";
import "../pages/summa.css";

const Card = () => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  useEffect(() => {
    const countdown = () => {
      const eventTime = new Date().getTime() + 5 * 60 * 1000;
      const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const difference = eventTime - currentTime;
        if (difference <= 0) {
          clearInterval(interval);
          setTimeLeft("00:00:00");
        } else {
          const minutes = Math.floor((difference / 1000 / 60) % 60);
          const seconds = Math.floor((difference / 1000) % 60);
          setTimeLeft(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
        }
      }, 1000);
    };
    countdown();
  }, []);

  return (
    <div className="carde">
      <div className="background" style={{ backgroundImage: "url('/images/bg.jpg')" }}></div>
      <div className="logoo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="logo-svgg">
          {/* <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9..."></path> */}
        </svg>
      </div>
      <div className="box box1">
        {/* <img src="/images/product.jpg" alt="Product" className="box-image" /> */}
        <p className="box-text">Product Name</p>
      </div>
      <div className="box box2">
        {/* <img src="/images/price.jpg" alt="Price" className="box-image" /> */}
        <p className="box-text">$99.99</p>
      </div>
      <div className="box box3">
        {/* <img src="/images/offer.jpg" alt="Offer" className="box-image" /> */}
        <p className="box-text">50% OFF</p>
      </div>
      <div className="box box4">
        <p className="box-text">Time Left: {timeLeft}</p>
      </div>
    </div>
  );
};

export default Card;
