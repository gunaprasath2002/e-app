import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import video from "../images/video1.mp4";

const AboutUs = () => {
  return (
    <Container fluid className="p-3">
      {/* Video Section */}
      <Row className="justify-content-center">
        <Col md={8} sm={12} className="text-center">
          <h2 className="mb-3">About Our eCommerce Platform</h2>
          <video width="100%" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
      
      <br/>
      {/* Banner Section */}
      <Row className="mt-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={banner1} />
            </Carousel.Item>
            </Carousel>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={banner2}  />
            </Carousel.Item>
            </Carousel>
            <br/>
            <br/>
            <br/>
            <br/>
            <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={banner3}  />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
