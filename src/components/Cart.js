import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import img1 from "../pages/images/empty_cart.png";
import { useContext } from "react";
import { CartContext } from "../App";
const CartPage = () => {
   const { cartItems, setCartItems } = useContext(CartContext);
  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  // Handle remove item
  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) =>
        total + (item.price - item.discount+item.deliveryCharge) * item.quantity,
      0
    );

  // Check if the cart is empty
  const isCartEmpty = cartItems.length === 0;

  return (
    <Container className="mt-4 mb-5">
      {isCartEmpty ? (
        // If cart is empty, show message and button
        <Row className="text-center">
          <Col>
            <img src={img1} alt="Empty Cart" className="img-fluid w-25 w-sm-25  w-md-100 w-lg-100" />
            <h3>Your cart is empty!</h3>
            <p>Add items to it now.</p>
            <Link to="/">
              <Button variant="primary">Shop Now</Button>
            </Link>
          </Col>
        </Row>
      ) : (
        // If cart has items, show cart details
        <Row>
          {/* Left Column: Product Details */}
          <Col md={8}>
            {cartItems.map((item) => (
              <div key={item.id} className="border mb-4 p-3 rounded">
              <Row className="align-items-center">
                {/* Image Section */}
                <Col md={2} className="d-flex align-items-center">
                  <img
                    src={item.images && item.images.length > 0 ? item.images[0] : "https://via.placeholder.com/150"}
                    alt={item.name || "Product Image"}
                    className="img-fluid rounded-start"
                    style={{ objectFit: "cover", width: "100%", height: "100px" }} // Fixed height for consistency
                  />
                </Col>
            
                {/* Product Info */}
                <Col md={10}>
                  <h6 className="mb-1">{item.name}</h6>
                  <h6 className="text-muted">
                    Color | {item.specifications?.General?.Color || "Not Available"}
                  </h6>
                  <p className="text-muted mb-1">
                    Delivery Charges | ₹{item.deliveryCharge || "0"}
                  </p>
            
                  {/* Price Section */}
                  <div className="d-flex align-items-center mb-2">
                    <p className="mb-0">
                      <strong>
                        ₹{item.price - item.discount}{" "}
                        <span className="text-muted text-decoration-line-through">
                          ₹{item.price}
                        </span>{" "}
                        <span className="text-success">
                          ({Math.round((item.discount / item.price) * 100)}% Off)
                        </span>
                      </strong>
                    </p>
                  </div>
            
                  {/* Quantity and Remove Buttons */}
                  <Row className="mt-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleRemove(item.id)}
                        className="float-end"
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            
            ))}
          </Col>

          {/* Right Column: Price Details */}
          <Col md={4}>
            <div className="border p-3">
              <h5>Price Details</h5>
              <hr />
              <Table borderless>
                <tbody>
                  <tr>
                    <td>Price ({cartItems.length} item)</td>
                    <td className="text-end">₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</td>
                  </tr>

                  <tr>
                    <td>Discount</td>
                    <td className="text-end text-success">
                      -₹{cartItems.reduce((total, item) => total + item.discount * item.quantity, 0)}
                    </td>
                  </tr>
                  <tr>
                    <td>Delivery Charges</td>
                    <td className="text-end text-success">
                      ₹{cartItems.reduce((total, item) => total + item.deliveryCharge, 0)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Total Amount</strong>
                    </td>
                    <td className="text-end">
                      <strong>₹{calculateTotal()}</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Link to="/buy" className="nav-link d-flex align-items-center">
                <Button variant="warning" className="w-100 mt-2">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartPage;
