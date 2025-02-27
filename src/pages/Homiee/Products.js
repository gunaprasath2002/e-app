import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import "./category.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import external CSS



const ImageLoader = ({ imageUrl, onClick = null, styles = {} }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
      AOS.init({ duration: 1500 }); // Initialize AOS with default settings
    }, []); // Run AOS only once when component mounts

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(imageUrl, {
          headers: {
            Accept: "application/json",
            "ngrok-skip-browser-warning": "98547",
          },
        });
        const blob = await response.blob();
        setImageData(blob);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchImage();
  }, [imageUrl]);

  return (
    <div>
      {imageData && (
        <img
          onClick={onClick}
          src={URL.createObjectURL(imageData)}
          alt="Fetched Image"
          style={Object.keys(styles).length > 0 ? styles : { maxHeight: '200px' }}
        />
      )}
    </div>
  );
};

const calculateTimeSince = (timestamp) => {
  const now = new Date();
  const productTime = new Date(timestamp);
  const diffInSeconds = Math.floor((now - productTime) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds} sec ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hr ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://46b1-59-97-51-97.ngrok-free.app/ecom/products/', {
          method: 'GET',
          headers: {
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "98547",
            "Content-Type": "multipart/form-data",
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data.products)) {
          setProducts(data.products.slice(0, 4));
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with default settings
  }, []); // Run AOS only once when component mounts

  return (
    <div>
      <h4 className="text-start my-4" data-aos="fade-up">Popular Products</h4>
      <div className="product-scroll-container"  data-aos="fade-up">
        <div className="product-list" ref={scrollRef}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  <div className="product-image">
                    <ImageLoader imageUrl={`https://46b1-59-97-51-97.ngrok-free.app/${product.image}`} />
                  </div>
                  <div className="product-details">
                    <h5 className="product-title">{product.name}</h5>
                    <p className="product-price">Rs {product.price}</p>
                    <p className="product-time">🕒 {calculateTimeSince(product.timestamp)}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
