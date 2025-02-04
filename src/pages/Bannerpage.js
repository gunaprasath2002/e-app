import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, link, image, name, price }) => {
  const navigate = useNavigate();

  return (
    <div className="card border-0 shadow-sm p-3 rounded" onClick={() => navigate(link)} style={{ cursor: "pointer", width: "18rem" }}>
      <img src={image} alt={name} className="card-img-top rounded" style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-primary fw-bold">{price}</p>
        <button className="btn btn-dark w-100">View Details</button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      id: 1,
      link: "/product/1",
      image: "https://via.placeholder.com/300x200",
      name: "Wireless Headphones",
      price: "₹1,999",
    },
    {
      id: 2,
      link: "/product/2",
      image: "https://via.placeholder.com/300x200",
      name: "Smartphone Stand",
      price: "₹299",
    },
    {
      id: 3,
      link: "/product/3",
      image: "https://via.placeholder.com/300x200",
      name: "Gaming Mouse",
      price: "₹899",
    },
    {
      id: 4,
      link: "/product/4",
      image: "https://via.placeholder.com/300x200",
      name: "Bluetooth Speaker",
      price: "₹2,499",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row justify-content-center gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
