import React, { useState, useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Banner from "./Home";
import Slide from "./Slide";
import "./category.css";

const CategorySelection = () => {
  const navigate = useNavigate();
  const productSectionRef = useRef(null);

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
    { id: 13, name: 'Football', offer: 'Min 70% Offer', category: 'Sports', image: require('../images/foot.avif') },
    { id: 14, name: 'Cricket', offer: 'Upto 30% Offer', category: 'Sports', image: require('../images/cri.jpg') },
    { id: 15, name: 'Helmet', offer: 'Min 50% Offer', category: 'Automobiles', image: require('../images/hel.avif') },
    { id: 16, name: 'Bike', offer: 'From ₹150000', category: 'Automobiles', image: require('../images/bike.avif') },
    { id: 17, name: 'kids', offer: 'Special Offer', category: 'Fashion', image: require('../images/kid.avif') },
    { id: 18, name: 'Spare Parts', offer: 'Min 20% Offer', category: 'Automobiles', image: require('../images/spare.avif') },

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
      {/* Category Section */}
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
      {/* Products Section */}
      <div ref={productSectionRef}>
        <h2>Products</h2>
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id} sm={2} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: '240px', objectFit: 'cover', cursor: 'pointer' }}
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
      
      <Slide />
    </>
  );
};

export default CategorySelection;
