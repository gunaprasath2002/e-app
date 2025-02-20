import React, { useState } from "react";
import SidebarFilter from "./SidebarFilter";
import Products from "./Products";

const ProductsList = () => {
  const [filters, setFilters] = useState({
    price: 100000,
    brands: [],
    rating: 0,
  });

  return (
    <div className="container-fluid my-5 px-4"> {/* Increased width with padding */}
      <div className="row">
        {/* Sticky Sidebar (Left for Desktop) */}
        <div className="col-lg-2 col-md-3"> {/* Adjusted column size */}
          <SidebarFilter filters={filters} setFilters={setFilters} />
        </div>

        {/* Products (Right) */}
        <div className="col-lg-10 col-md-9"> {/* More width for products */}
          <Products filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
