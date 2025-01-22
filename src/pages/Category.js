import React, { useState, useRef } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Banner from "./Home";

import './category.css';

const CategorySelection = () => {
  const navigate = useNavigate();
  const productSectionRef = useRef(null); // Reference to scroll to the product section

  const categories = ['All', 'Electronics', 'Fashion', 'Books', 'Home Appliances', 'Music'];

  const products = [
    { id: 1, name: 'Laptop', offer: 'From ₹29,999', category: 'Electronics', image: require('../images/laptop.avif') },
    { id: 2, name: 'T-shirt', offer: 'Upto 70% Offer', category: 'Fashion', image: require('../images/shirt.avif') },
    { id: 3, name: 'Novel', offer: 'Special Offer', category: 'Books', image: require('../images/novel.avif') },
    { id: 4, name: 'Refrigerator', offer: 'Min 50% Offer', category: 'Home Appliances', image: require('../images/regri.jpg') },
    { id: 5, name: 'Headphones', offer: 'Upto 40% Offer', category: 'Electronics', image: require('../images/headphh.avif') },
    { id: 6, name: 'Guitar', offer: 'Min 70% Offer', category: 'Music', image: require('../images/gui.jpg') },
    { id: 7, name: 'History', offer: 'Rare Collections', category: 'Books', image: require('../images/book2.avif') },
    { id: 8, name: 'Kitchen Appliances', offer: 'Min 20% Offer', category: 'Home Appliances', image: require('../images/kitchen.avif') },
    { id: 9, name: 'Women`s Wear', offer: 'Top Collections', category: 'Fashion', image: require('../images/women.avif') },
    { id: 10, name: 'Piano', offer: 'Upto 80% Offer', category: 'Music', image: require('../images/piano.jpg') },
    { id: 11, name: 'Mobiles', offer: 'From ₹9,999', category: 'Electronics', image: require('../images/mobile.jpeg') },
    { id: 12, name: 'Men`s Wear', offer: 'Special Offer', category: 'Fashion', image: require('../images/mens.avif') },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

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
      <hr />
      <section>
        {/* Category Selection */}
        <Row className="mb-4 m-1">
          {categories.map((category, index) => (
            <Col key={index} sm={2} className="mb-2">
              <Button
                variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                onClick={() => handleCategoryClick(category)}
                className="w-100"
              >
                {category}
              </Button>
            </Col>
          ))}
        </Row>

        <Banner />
        <hr />
        {/* Display Products */}
        <div ref={productSectionRef}>
          <h2>Products</h2>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} sm={2} className="mb-3 m-0.5">
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: '240px', width: '230px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => handleImageClick(product.id)}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.offer}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <hr />
    </>
  );
};

export default CategorySelection;
