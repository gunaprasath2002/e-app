import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import "./category.css";

// ImageLoader component
const ImageLoader = ({ imageUrl, onClick = null, styles = {} }) => {
  const [imageData, setImageData] = useState(null);

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

// Products component
const Products = () => {
  const [products, setProducts] = useState([]); // API data state
  const scrollRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://1a83-59-97-51-97.ngrok-free.app/ecom/products/', {
          method: 'GET',
          headers: {
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "98547",
            "Content-Type": "multipart/form-data", // You might remove or change this header for GET
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data.products)) {
          setProducts(data.products.slice(0, 4)); 
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

  // Optional: Handle image click if needed
  const handleChangeImage = (product) => {
    console.log("Clicked on product:", product);
  };

  return (
    <>
    {/* <Container fluid> */}
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
                      <ImageLoader
                        onClick={() => handleChangeImage(product)}
                        imageUrl={`https://1a83-59-97-51-97.ngrok-free.app/${product.image}`}
                      />
                    </div>
                    <div className="product-details">
                      <h5 className="product-title">{product.name}</h5>
                      <p className="product-price">Rs {product.price}</p>
                      <p className="product-des">{product.description}</p>
                      <p className="product-offer">{product.offer}</p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
        </div>
      </div>
    {/* </Container> */}
    </>
  );
};

export default Products;
