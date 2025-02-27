import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./category.css"; // Import external CSS
import AOS from "aos";
import "aos/dist/aos.css"; // Import external CSS

const ImageLoader = ({ imageUrl, onClick = null }) => {
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
        setImageData(URL.createObjectURL(blob)); // Convert Blob to Object URL
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [imageUrl]);

  return (
    <div>
      {imageData && (
        <img
          onClick={onClick}
          src={imageData}
          alt="Fetched Image"
          className="category-image"
        />
      )}
    </div>
  );
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with default settings
  }, []); // Run AOS only once when component mounts

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://46b1-59-97-51-97.ngrok-free.app/ecom/categories/",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "ngrok-skip-browser-warning": "98547",
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data.Category)) {
          setCategories(data.Category);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
    {/* <Container fluid> */}
      <h4 className="category-heading" data-aos="fade-up">Featured Categories</h4>

      <div className="category-scroll-container"data-aos="fade-up">
        <div className="category-wrapper">
          {categories.length > 0 ? (
            categories.map((category) => (
              <Link key={category.id} to={`/category/${category.id}`} className="category-link">
                <div className="category-item">
                  {/* Use ImageLoader to fetch and display images */}
                  <ImageLoader imageUrl={`https://46b1-59-97-51-97.ngrok-free.app/${category.image}`} />
                  <p className="category-text">{category.brand_name}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="loading-text">Loading categories...</p>
          )}
        </div>
      </div>
    {/* </Container> */}
    </>
  );
};

export default Categories;
