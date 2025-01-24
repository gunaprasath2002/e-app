import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      description: "High-performance smartphone with amazing features.",
      price: 20000,
      rating: 4.5,
      image: require('../images/laptop.avif'),
    },
    {
      id: 2,
      name: "Headphones",
      description: "Noise-cancelling over-ear headphones.",
      price: 5000,
      rating: 4.3,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Laptop",
      description: "Lightweight and powerful laptop for professionals.",
      price: 60000,
      rating: 4.7,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Container fluid className="mt-3">
      <Row>
        {/* Left Side Filters */}
        <Col md={3} className="bg-light p-3">
          <h5>Filters</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Check type="checkbox" label="Smartphones" />
              <Form.Check type="checkbox" label="Headphones" />
              <Form.Check type="checkbox" label="Laptops" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price Range</Form.Label>
              <Form.Range />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Check type="checkbox" label="4★ & above" />
              <Form.Check type="checkbox" label="3★ & above" />
            </Form.Group>
            <Button variant="primary" className="w-100">
              Apply Filters
            </Button>
          </Form>
        </Col>

        {/* Center Product List */}
        <Col md={6}>
          <h5>Products</h5>
          <Row>
            {products.map((product) => (
              <Col md={12} key={product.id} className="mb-3">
                <Card>
                  <Row>
                    <Col md={4}>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <div>
                          <span className="text-warning">
                            {"★".repeat(Math.floor(product.rating))}
                          </span>
                          <span className="text-muted">
                            {"★".repeat(5 - Math.floor(product.rating))}
                          </span>
                        </div>
                        <Button variant="primary">View Details</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right Side Product Details */}
        <Col md={3} className="bg-light p-5">
          <h5>Product Details</h5>
          {products.map((product) => (
            <div key={product.id} className="mb-3">
              <h6>{product.name}</h6>
              <p>Price: ₹{product.price}</p>
              <p>Rating: {product.rating} ★</p>
              <Button variant="success" size="sm">
                Add to Cart
              </Button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
