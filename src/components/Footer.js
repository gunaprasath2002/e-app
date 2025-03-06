import React, { useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/footer.css";
import Banner from "../pages/images/bannerhome2.jpg"
import Banner1 from "../pages/images/bannerhome1.jpg"
import Banner2 from "../pages/images/bannerhome4.jpg"

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up">
      <motion.footer 
        className="text-dark pt-5 pb-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Container fluid>
          {/* Carousel Banner Section */}
          <Row className="mb-2 ">
            <Col className="eee">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={Banner} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={Banner1} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={Banner2} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          {/* Features Section */}
          <Row className="text-center mb-4" style={{ backgroundColor: "#BCCCDC", borderRadius: "10px" }}>
            {[
              { title: "Best prices & offers", icon: "💰" },
              { title: "Free delivery", icon: "🚚" },
              { title: "Great daily deal", icon: "📜" },
              { title: "Wide assortment", icon: "📊" },
              { title: "Easy returns", icon: "🔄" },
              { title: "24/7 Support", icon: "🎧" },
            ].map((feature, index) => (
              <Col key={index} md={2} sm={4} xs={6} className="mb-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="fs-3">{feature.icon}</span>
                  <h6 className="mt-2">{feature.title}</h6>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Footer Links */}
          <Row className="text-center text-md-start">
            {[
              { title: "Company", links: ["About Us", "Contact Us", "Our Services", "Delivery Information"], paths: ["/about", "/contact", "/services", "/delivery"] },
              { title: "Corporate", links: ["Terms & Conditions", "Privacy Policy", "Careers", "Wide Assortment"], paths: ["/terms", "/privacy", "/careers", "/wide"] },
              { title: "Popular", links: ["Best Prices & Offers", "Free Delivery", "Great Daily Deals", "Easy Returns"], paths: ["/prices", "/fdelivery", "/deal", "/returns"] }
            ].map((section, index) => (
              <Col key={index} md={3} sm={6}>
                <h5>{section.title}</h5>
                <ul className="list-unstyled">
                  {section.links.map((link, i) => (
                    <motion.li key={i} whileHover={{ x: 5, color: '#28a745' }} transition={{ duration: 0.2 }}>
                      <Link to={section.paths[i]} className="text-decoration-none text-dark">{link}</Link>
                    </motion.li>
                  ))}
                </ul>
              </Col>
            ))}

            {/* Contact Us Section */}
            <Col md={3} sm={6}>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <motion.li whileHover={{ x: 5 }}><FaMapMarkerAlt /> Thiran360AI, Kullampalayam, Gobi</motion.li>
                <motion.li whileHover={{ x: 5 }}><FaPhone /> (+91) 9944068447</motion.li>
                <motion.li whileHover={{ x: 5 }}><FaEnvelope /> thiran@.com</motion.li>
                <motion.li whileHover={{ x: 5 }}><FaClock /> 10:00 - 18:00, Mon - Sat</motion.li>
              </ul>
            </Col>
          </Row>

          {/* Social Media & Copyright */}
          <Row className="mt-5 text-center">
            <Col>
              <h5>Follow Us</h5>
              {[
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaYoutube />, link: "#" }
              ].map((social, index) => (
                <motion.a key={index} href={social.link} className="mx-2 fs-4" whileHover={{ scale: 1.3, color: "#F98866" }} transition={{ duration: 0.2 }}>
                  {social.icon}
                </motion.a>
              ))}
            </Col>
          </Row>

          <Row className="mt-3 text-center">
            <Col>
              <p className="text-dark">© {new Date().getFullYear()} E-Shop. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </motion.footer>
    </div>
  );
};

export default Footer;
