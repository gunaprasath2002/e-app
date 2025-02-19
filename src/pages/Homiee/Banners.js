
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import {motion} from "framer-motion"; // Import Framer Motion
import 'bootstrap/dist/css/bootstrap.min.css';
import './category.css';




const banners1= [
  { id: 201, img: require('../images/slidesml.jpg') },
  { id: 202, img: require('../images/slidesml1.jpg') },
  { id: 205, img:  require('../images/slidesml.jpg') },
  { id: 203, img:  require('../images/slidesml2.jpg') },
  { id: 204, img:  require('../images/slidesml3.jpg') },
];

const Banners = () => {
  const [banners, setBanners] = useState([]); // For storing banner data

  useEffect(() => {
    // Fetch banner data from API
    const fetchBanners = async () => {
      try {
        const response = await fetch('https://6094-59-97-51-97.ngrok-free.app/store/banners/', {
          method: 'GET',
          headers: {
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "98547",
            "Content-Type": "multipart/form-data",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data.banners)) {
          setBanners(data.banners); // Set banner data
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <Container fluid>
      <h4 className="text-start my-4">Featured Banners</h4>

      <Row className="my-4">
        <Swiper
          modules={[Autoplay, FreeMode]} 
          spaceBetween={15}
          slidesPerView={4}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {banners1.length > 0 ? (
            banners1.map((banner) => (
              <SwiperSlide key={banner.id}>
                <Link to={`/banner/${banner.id}`}>
                  <motion.img
                    src={banner.img} // Fallback image if not available
                    alt={`Banner ${banner.id}`}
                    className="img-fluid rounded"
                    style={{ width: "100%", height: "auto" }}
                    whileHover={{ scale: 1.1 }} // Add hover animation effect
                    transition={{ duration: 0.3 }} // Duration of hover transition
                  />
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <p>Loading banners...</p>
          )}
        </Swiper>
      </Row>
    </Container>
  );
};

export default Banners;











  


 