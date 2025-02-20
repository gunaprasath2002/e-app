import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import productsData from "./itemData.json";
import "./Products.css";

const Products = ({ filters }) => {
  const navigate = useNavigate();

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} color="gold" size={18} />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} color="gold" size={18} />);
      } else {
        stars.push(<FaRegStar key={i} color="gold" size={18} />);
      }
    }
    return stars;
  };

  // Filter products based on user-selected filters
  const filteredProducts = productsData.filter((product) => {
    return (
      product.price <= filters.price && // Price filter
      (filters.brands.length === 0 || filters.brands.includes(product.brand)) && // Brand filter
      (filters.rating === 0 || Math.floor(product.rating) === filters.rating) // Rating filter
    );
  });

  return (
    <div className="row">
      {filteredProducts.map((product) => (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
          <div
            className="card position-relative"
            onClick={() => navigate(`/product/${product.id}`)} // Navigate to product details
          >
            <img src={product.images[0]} className="card-img-top" alt={product.name} />
            <div className="card-body text-center">
              <h6 className="card-title">{product.name}</h6>
              <p className="mb-0">
                <strong>
                  ₹{product.price - product.discount}{" "}
                  <span className="text-muted text-decoration-line-through">
                    ₹{product.price}
                  </span>{" "}
                  <span className="text-end text-success">
                    ({Math.round((product.discount / product.price) * 100)}% Off)
                  </span>
                </strong>
              </p>
              <div className="card-rating">{renderStars(product.rating)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
