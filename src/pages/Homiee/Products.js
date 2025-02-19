import React,{ useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import "./category.css"; // Import styles

const Products = () => {
  const [products, setProducts] = useState([]); // State for storing API data
  const scrollRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://da9f-59-97-51-97.ngrok-free.app/store/products/', {
          method: 'GET',
          headers: {
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "98547",
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data.products)) {
          setProducts(data.products); // Set only the products array
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <Container fluid>
    <div>
      <h4 className="text-start my-4">Popular Products</h4>
      <div className="product-scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>

        <div className="product-list" ref={scrollRef}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  <div className="product-image">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h5 className="product-title">{product.name}</h5>
                    <p className="product-price">Rs {product.price}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading products...</p> // Show loading text when API is fetching
          )}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
    </Container>
  );
};

export default Products;
