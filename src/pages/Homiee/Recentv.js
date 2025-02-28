import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const RecentlyViewed = () => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentProducts(storedProducts);
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
        Recently Viewed Products
      </h2>

      {recentProducts.length > 0 ? (
        <div 
          className="recently-viewed-container"
          style={{
            display: "flex",
            gap: "30px",
            overflowX: "auto",
            // paddingBottom: "8px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {recentProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Start position (invisible & lower)
              animate={{ opacity: 1, y: 0 }} // Final position (visible & normal)
              transition={{ duration: 0.4, delay: index * 0.1 }} // Staggered effect
            >
              <Link
                to={`/product/${product.id}`}
                className="product-carddd"
                style={{
                  flex: "0 0 auto",
                  width: "180px",
                  border: "1px solid #ddd",
                  padding: "12px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  whileHover={{ scale: 1.07 }} // Smooth hover effect
                />
                <h6 style={{ fontSize: "14px", fontWeight: "600", marginTop: "10px", whiteSpace: "nowrap", overflow: "hidden" }}>
                  {product.name}
                </h6>
                <p style={{ fontSize: "13px", color: "#666" }}>Rs {product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <p style={{ color: "#777" }}>No recently viewed products.</p>
      )}

      {/* Internal CSS for responsive styles and hiding scrollbar */}
      <style>
        {`
          .recently-viewed-container::-webkit-scrollbar {
            display: none;
          }
          @media (max-width: 768px) {
            .recently-viewed-container {
              gap: 12px;
            }
            .product-carddd {
              width: 140px;
            }
          }
          @media (max-width: 480px) {
            .product-carddd {
              width: 120px;
            }
            .product-carddd img {
              height: 100px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RecentlyViewed;
