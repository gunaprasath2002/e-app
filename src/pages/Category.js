import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Banner from "../pages/Home";
import Slide from "../pages/Slide";
import "../pages/category.css";

const CategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const productSectionRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://e25d-59-97-51-97.ngrok-free.app/store/products/', {
          method: 'GET',
          headers: {
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "98547",
            "Content-Type": "application/json"
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

  const categories = [
    { name: 'All', image: require('../images/all1.jpg') },
    { name: 'Electronics', image: require('../images/elect.avif') },
    { name: 'Books', image: require('../images/bk.avif') },
    { name: 'Fashion', image: require('../images/dress.jpg') },
    { name: 'Home Appliances', image: require('../images/home.jpg') },
    { name: 'Music', image: require('../images/mu.png') },
    { name: 'Sports', image: require('../images/sports.jpg') },
    { name: 'Automobiles', image: require('../images/cars.avif') },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.Category_reference?.brand_name === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <section className="category-section">
        <Row className="mb-4 text-center justify-content-center">
          <div className="category-scroll-container">
            {categories.map((category, index) => (
              <Col key={index} xs={4} sm={2} className="mb-4">
                <div
                  className={`category-card ${selectedCategory === category.name ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="category-image"
                  />
                  <div className="category-name">{category.name}</div>
                </div>
              </Col>
            ))}
          </div>
        </Row>
      </section>

      <Banner />
      <hr />
      <div ref={productSectionRef}>
        <h2>Products</h2>
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Col key={index} sm={2} className="mb-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: '240px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => handleImageClick(product.id)}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>price:{product.offer}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </Row>
      </div>
      <Slide />
    </>
  );
};

export default CategorySelection;
