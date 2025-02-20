import React, { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import { FaStar, FaRegStar } from "react-icons/fa";

const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme"];

const SidebarFilter = ({ filters, setFilters }) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <>
      {/* Sticky Sidebar for Desktop */}
      <Card className="sidebar d-none d-md-block position-sticky shadow-sm rounded" style={{ top: "80px" }}>
        <Card.Body>
          <h5 className="fw-bold text-primary mb-3">Filters</h5>
          <FilterContent filters={filters} setFilters={setFilters} />
        </Card.Body>
      </Card>

      {/* Mobile Filter Button */}
      <div className="d-md-none fixed-bottom p-2 bg-white shadow text-center">
        <Button className="w-100 fw-bold" variant="primary" onClick={() => setShowMobileFilters(true)}>
          Filter Products
        </Button>
      </div>

      {/* Mobile Filter Modal */}
      <Modal show={showMobileFilters} onHide={() => setShowMobileFilters(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FilterContent filters={filters} setFilters={setFilters} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMobileFilters(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Reusable Filter Content
const FilterContent = ({ filters, setFilters }) => (
  <>
    {/* Price Slider */}
    <div className="mb-4">
      <label className="fw-bold">Price Range: ₹{filters.price}</label>
      <RangeSlider
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: Number(e.target.value) })}
        min={1000}
        max={100000}
        step={1000}
        tooltip="auto"
        variant="primary"
      />
    </div>

    {/* Brand Selection */}
    <div className="mb-4">
      <h6 className="fw-bold">Brand</h6>
      {brands.map((brand) => (
        <Form.Check
          key={brand}
          type="checkbox"
          label={brand}
          className="custom-checkbox"
          checked={filters.brands.includes(brand)}
          onChange={(e) => {
            const newBrands = e.target.checked
              ? [...filters.brands, brand]
              : filters.brands.filter((b) => b !== brand);
            setFilters({ ...filters, brands: newBrands });
          }}
        />
      ))}
    </div>

    {/* Ratings Selection */}
    <div className="mb-4">
      <h6 className="fw-bold">Ratings</h6>
      {[5, 4, 3, 2, 1].map((starCount) => (
        <div key={starCount} className="mb-2 star-filter" onClick={() => setFilters({ ...filters, rating: starCount })}>
          {[...Array(5)].map((_, i) =>
            i < starCount ? (
              <FaStar key={i} color="gold" size={20} className="star-icon" />
            ) : (
              <FaRegStar key={i} color="gold" size={20} className="star-icon" />
            )
          )}
        </div>
      ))}
    </div>
  </>
);

export default SidebarFilter;
