import React, { useEffect, useState } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import external CSS

// Custom ImageLoader Component
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
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [imageUrl]);

  return (
    <div>
      {imageData ? (
        <img
          onClick={onClick}
          src={URL.createObjectURL(imageData)}
          alt="Fetched Banner"
          style={Object.keys(styles).length > 0 ? styles : { maxHeight: "200px" }}
        />
      ) : (
        // Optionally, you can add a small spinner or placeholder while the image loads
        <Spinner animation="border" role="status" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

const BannerCarousel = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []); // Initialize AOS only once

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(
          "https://46b1-59-97-51-97.ngrok-free.app/ecom/banner/",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "ngrok-skip-browser-warning": "98547",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data.Banner)) {
          setBanners(data.Banner);
        } else {
          console.error('API response "banner" is not an array:', data);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const handleBannerClick = (productId) => {
    if (productId) {
      navigate(`/product-details/${productId}`);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <nav>
      {banners.length ? (
        <Carousel
          className="guna"
          data-aos="fade-left"
          indicators={true}
          controls={true}
          nextIcon={<span className="custom-arrow right-arrow">→</span>}
          prevIcon={<span className="custom-arrow left-arrow">←</span>}
        >
          {banners.map((banner, index) => (
            <Carousel.Item key={index} className="pp">
              <ImageLoader
                onClick={() => handleBannerClick(banner.productId)}
                // Construct the full image URL using your base URL and the banner field (adjust if needed)
                imageUrl={`https://46b1-59-97-51-97.ngrok-free.app/${banner.image}`}
                styles={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No banners available.</p>
      )}
    </nav>
  );
};

export default BannerCarousel;
