import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './slide.css';

const Products = [
  { id: 1, name: 'Elevate your morning routine with our classic ceramic coffee mug, Perfect for coffee lovers, or as a thoughtful gift!"', price: '₹299😍', image: require('../images/mud.avif') },
  { id: 2, name: 'A replica of a real plant, designed to mimic the appearance and sometimes the texture of a living plant', price: '₹499🤩', image: require('../images/arti.avif') },
  { id: 3, name: 'A sleek, modern wall clock featuring a minimalist design with clean lines and a high-contrast face', price: '₹899💰', image: require('../images/clock.avif') },
  { id: 4, name: 'An ignitable wick embedded in wax that provides light and, in some cases, a fragrance.', price: '₹99🤩', image: require('../images/candle.avif') },
  { id: 5, name: 'Bold and contemporary, this gold-plated brass ring boasts a geometric design with sharp angles.', price: '₹999💍', image: require('../images/ring.avif') },
  { id: 6, name: 'A seat, especially for one person, usually for support and rest for the back.', price: '₹2,999😍', image: require('../images/chair.avif') },
  { id: 7, name: 'A unique, hand-knitted scarf with color patterns, featuring a soft, luxurious yarn for warmth.', price: '₹2,499🤩', image: require('../images/art.avif') },
  { id: 8, name: 'A small bag which a woman uses to carry things such as her money and keys when going out.', price: '₹1,599💰', image: require('../images/bag.avif') },
  { id: 9, name: 'A toy is more than just an object; it is a vessel of joy, imagination, and fond memories.', price: '₹1,999😍', image: require('../images/toy.jpg') },
];

const ProductCarousel = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let autoScroll;

    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        if (scrollRef.current && !isHovered) {
          const scrollAmount = scrollRef.current.offsetWidth; // Scroll by container width
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

          // Restart scrolling to the beginning when reaching the end
          const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          if (scrollRef.current.scrollLeft >= maxScrollLeft) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    return () => clearInterval(autoScroll);
  }, [isHovered]); // Restart scrolling when hover state changes

  return (
    <div className="product-carousel">
      <h2 className="title">Products You May Like!</h2>
      {/* <button className="view-all-button" onClick={() => navigate('/products')}> */} 
        {/* View All</button> */}


      <div
        className="scroll-container"
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}  // Stop auto-scroll when mouse enters
        onMouseLeave={() => setIsHovered(false)} // Resume auto-scroll when mouse leaves
      >
        {Products.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={item.image}
              alt={item.name}
              className="product-image"
              onClick={() => navigate(`/product/${item.id}`)}
            />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
