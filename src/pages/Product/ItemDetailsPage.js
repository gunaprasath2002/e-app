import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import itemData from "./itemData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ProductSlider from "./ProductCarousel";
import { CartContext, WishListContext } from "../../App";

const ItemDetails = ({ cartItems, setCartItems, wishItems, setWishItems }) => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = itemData.find((item) => item.id === productId);

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]); // Set to first image when new product loads
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mt-5">
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  const toggleWishlist = () => {
    if (wishItems.some((item) => item.id === product.id)) {
      setWishItems((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishItems((prev) => [...prev, product]);
    }
  };

  const addToCart = () => {
    if (!cartItems.some((item) => item.id === product.id)) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const removeFromCart = () => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        {/* Left Side - Product Images */}
        <div className="col-12 col-md-6 position-relative mb-4 mb-md-0">
          {/* Main Image */}
          <img
            src={selectedImage}
            alt="Product"
            className="img-fluid mb-3"
            style={{ height: "300px", objectFit: "contain" }}
          />

          {/* Wishlist Icon */}
          <div
            className="position-absolute top-0 end-0 px-4"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={toggleWishlist}
          >
            {wishItems.some((item) => item.id === product.id) ? (
              <AiFillHeart className="text-danger" />
            ) : (
              <AiOutlineHeart className="text-muted" />
            )}
          </div>

          {/* Thumbnails */}
          <div className="d-flex overflow-auto mt-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`img-thumbnail me-2 ${selectedImage === img ? "border border-primary" : ""}`}
                style={{ width: "75px", cursor: "pointer" }}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="col-12 col-md-6">
          <h2>{product.name}</h2>

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

          <p>{product.description}</p>

          {/* Cart Buttons */}
          {cartItems.some((item) => item.id === product.id) ? (
            <button className="btn btn-danger btn-lg mb-3" onClick={removeFromCart}>
              Remove from Cart
            </button>
          ) : (
            <button className="btn btn-primary btn-lg mb-3" onClick={addToCart}>
              Add to Cart
            </button>
          )}
          <button className="btn btn-warning btn-lg ms-2 mb-3">Buy Now</button>

          {/* Customer Reviews */}
          <div className="mt-4">
            <h5>Customer Reviews</h5>
            {product.reviews?.map((review, index) => (
              <div key={index} className="border-bottom pb-2 mb-2">
                <strong>{review.user}</strong>{" "}
                <span className="text-warning">
                  {"★".repeat(review.rating)}{" "}
                  {"☆".repeat(5 - review.rating)}
                </span>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="mt-5">
        <h3>Product Specifications</h3>
        {Object.entries(product.specifications || {}).map(([category, specs]) => (
          <div key={category} className="mb-4">
            <h5 className="bg-light p-2 border">
              {category.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </h5>
            <table className="table table-borderless">
              <tbody>
                {Object.entries(specs).map(([key, value]) => (
                  <tr key={key}>
                    <td className="fw-bold text-start" style={{ width: "40%" }}>
                      {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    </td>
                    <td className="text-start">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

function ItemDetailsPage() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { wishItems, setWishItems } = useContext(WishListContext);

  return (
    <div className="App">
      <ItemDetails
        cartItems={cartItems}
        setCartItems={setCartItems}
        wishItems={wishItems}
        setWishItems={setWishItems}
      />
      <ProductSlider wishItems={wishItems} setWishItems={setWishItems} />
    </div>
  );
}

export default ItemDetailsPage;
