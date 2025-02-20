import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { WishListContext } from "../App";
import { Row, Col, Button } from "react-bootstrap";
import img2 from "../pages/images/wish.jpg";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishItems, setWishItems } = useContext(WishListContext);
  console.log(wishItems);

  if (!Array.isArray(wishItems)) {
    console.error("wishItems is not an array:", wishItems);
    return <p>Error: Wishlist data is invalid.</p>;
  }

  // Prevent the link navigation when removing an item
  const handleRemoveItem = (e, id) => {
    e.preventDefault(); // Prevent link navigation
    setWishItems(wishItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-2">
      <h3 className="mb-2 mt-0">My Wishlist</h3>
      <h5 className="mb-5">There are <span className="text-success">{wishItems.length}</span> products in your wishlist</h5>

      {wishItems.length === 0 ? (
        <Row className="text-center pb-3">
          <Col>
            <img
              src={img2}
              alt="Empty Cart"
              className="img-fluid w-25 w-sm-25 w-md-100 w-lg-100"
            />
            <h3>Empty Wishlist</h3>
            <p>You have no items in your wishlist. Start adding!</p>
            <Link to="/">
                <Button variant="primary">Shop Now</Button>
              </Link>
          </Col>
        </Row>
      ) : (
        wishItems.map((item) => {
          // ✅ Handle missing images
          const imageUrl =
            item.images && item.images.length > 0
              ? item.images[0]
              : "https://via.placeholder.com/150"; // Default image

          return (
            <div key={item.id} className="card mb-2">
            <Link className="navbar-brand d-flex align-items-center" to={`/product/${item.id}`}>
              <div className="row g-1">
                {/* Image Section */}
                <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
                  <img
                    src={imageUrl}
                    className="img-fluid rounded-start"
                    alt={item.name || "Product Image"}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  />
                </div>
                
                {/* Text Section */}
                <div className="col-8 col-sm-9 col-md-10">
                  <div className="card-body d-flex flex-column align-items-start justify-content-between h-75 mt-3">
                    <h5 className="card-title">{item.name}</h5>
                    <h6>
                      Color |{" "}
                      {item.specifications && item.specifications.General
                        ? item.specifications.General.Color
                        : "Not Available"}
                    </h6>
                    <div className="d-flex mb-2">
                      <p className="mb-0">
                        <strong>
                          ₹{item.price - item.discount}{" "}
                          <span className="text-muted text-decoration-line-through">
                            ₹{item.price}
                          </span>{" "}
                          <span className="text-end text-success">
                            ({Math.round((item.discount / item.price) * 100)}% Off)
                          </span>
                        </strong>
                      </p>
                    </div>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => handleRemoveItem(e, item.id)}
                    >
                      <i className="bi bi-trash"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          

          );
        })
      )}
    </div>
  );
};

export default Wishlist;
