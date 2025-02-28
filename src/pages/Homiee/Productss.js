import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col,Container, Card, Carousel, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import Promo from "../images/promo.avif";

// Static Product Data
const staticProducts = [
  { id: 301, name: "T-Shirts", price: 1200, oldPrice: 1450, img: require("../images/shirt.avif"), rating: 5 },
  { id: 302, name: "Men Colourblocked", price: 1800, oldPrice: 1900, img: require("../images/shirt.avif"), rating: 3 },
  { id: 303, name: "Motorola Edge 50", price: 22490, oldPrice: 23999, img: require("../images/shirt.avif"), rating: 4 },
  { id: 304, name: "OnePlus Nord CE 3 Lite", price: 15490, oldPrice: 17490, img: require("../images/shirt.avif"), rating: 4 },
  { id: 304, name: "OnePlus Nord CE 3 Lite", price: 15490, oldPrice: 17490, img: require("../images/shirt.avif"), rating: 4 },
  { id: 304, name: "OnePlus Nord CE 3 Lite", price: 15490, oldPrice: 17490, img: require("../images/shirt.avif"), rating: 4 },
  { id: 304, name: "OnePlus Nord CE 3 Lite", price: 15490, oldPrice: 17490, img: require("../images/shirt.avif"), rating: 4 },
  { id: 304, name: "OnePlus Nord CE 3 Lite", price: 15490, oldPrice: 17490, img: require("../images/shirt.avif"), rating: 4 },

];

const ProductCarousel = () => {
  const [products, setProducts] = useState(staticProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Fetch API Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://da9f-59-97-51-97.ngrok-free.app/store/banner/", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "ngrok-skip-browser-warning": "98547",
            "Content-Type": "multipart/form-data",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data.products)) {
          setProducts(data.products); // Set API products
        } else {
          console.error("API response is not an array:", data);
          setProducts(staticProducts); // Fallback to static products
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts(staticProducts); // Use static products on API failure
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Responsive Handler
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid>
    <Row className="mt-4">
      {/* Featured Products Carousel */}
      <Col md={9}>
        <h4 className="mb-3">Top Trendy Collections!</h4>

        {loading ? (
          <div style={styles.loadingContainer}>
            <Spinner animation="border" variant="primary" />
            <p style={styles.loadingText}>Loading...</p>
          </div>
        ) : error ? (
          <p style={styles.errorText}>{error}</p>
        ) : (
          <Carousel indicators={false} controls={true}>
            {Array.from({ length: Math.ceil(products.length / (isMobile ? 2 : 4)) }, (_, i) => (
              <Carousel.Item key={i}>
                <Row>
                  {products.slice(i * (isMobile ? 2 : 4), i * (isMobile ? 2 : 4) + (isMobile ? 2 : 4)).map((product) => (
                    <Col key={product.id} md={3} sm={6} xs={12} className="mb-4">
                      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.1 }} style={styles.productCard}>
                          <Card>
                            <Card.Img variant="top" 
                              src={product.image ? product.image : product.img} 
                              style={isMobile ? styles.productImgSmall : styles.productImg} 
                            />
                            <Card.Body>
                              <Card.Title style={styles.title}>{product.name}</Card.Title>
                              <p style={styles.price}>
                                <span style={styles.newPrice}>Rs {product.price}</span>{" "}
                                <del style={styles.oldPrice}>Rs {product.oldPrice}</del>
                              </p>
                            </Card.Body>
                          </Card>
                        </motion.div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Col>

      {/* Large Promotional Card */}
      <Col md={3} sm={12}>
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} style={styles.promoCard}>
          <Card>
            <Link to="/promo">
              <Card.Img variant="top" src={Promo} style={styles.promoImg} />
            </Link>
          </Card>
        </motion.div>
      </Col>
    </Row>
    </Container>
  );
};

// Inline Styles
const styles = {
  productCard: {
    height: "100%",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  productImg: {
    height: "400px",
    objectFit: "contain",
    // padding: "10px",
  },
  productImgSmall: {
    height: "250px",
    objectFit: "contain",
    padding: "10px",
    display: "flex",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  price: {
    fontSize: "16px",
  },
  newPrice: {
    color: "green",
    fontWeight: "bold",
  },
  oldPrice: {
    color: "gray",
    textDecoration: "line-through",
  },
  promoCard: {
    height: "580px",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  promoImg: {
    height: "580px",
    objectFit: "fit",
  },
  loadingContainer: {
    textAlign: "center",
    padding: "50px",
  },
  loadingText: {
    fontSize: "18px",
    marginTop: "10px",
    color: "#007bff",
  },
  errorText: {
    fontSize: "18px",
    color: "red",
    textAlign: "center",
  },
};

export default ProductCarousel;
