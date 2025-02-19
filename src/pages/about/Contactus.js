import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center text-info mb-4">Contact Us</h2>
      {showAlert && <Alert variant="primary">Your message has been sent!💌</Alert>}
      <Row>
        {/* Contact Information */}
        <Col md={6} className="mb-4">
          <h4>Customer Support</h4>
          <p>
            If you have any questions or need assistance, feel free to contact
            us.
          </p>
          <p>
            <strong>Email:</strong> support@ecommerce.com
          </p>
          <p>
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p>
            <strong>Address:</strong> 123 E-Commerce St, City, Country
          </p>
        </Col>
        
        {/* Contact Form */}
        <Col md={6} className="mb-4">
          <h4>Get in Touch</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} placeholder="Enter your message" value={formData.message} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
      
      {/* Google Map Embed */}
      <Row className="mt-4">
        <Col>
          <h4 className="text-center">Find Us</h4>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.9537353155043!3d-37.816279742021826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fbd293%3A0x5045675218ce840!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1629206373908!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
