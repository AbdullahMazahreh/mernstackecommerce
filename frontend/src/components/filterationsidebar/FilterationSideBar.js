import React, { Fragment, useEffect, useState } from "react";
import "./filterationsidebar.css";
import { ProductCard } from "../Index";
import axios from "axios";

function FilterationSideBar() {
  const [allProducts, setAllProducts] = useState([]);
  const fetchAllProducts = async () => {
    try {
      const products = await axios.get("http://localhost:3001/api/v1/products");
      setAllProducts(products.data.data.products);
    } catch (err) { 
      console.log(err);
    }
  };

  const displayProducts = allProducts.map((ele) => {
    return <ProductCard />;
  });

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Fragment>
      <div className="productspage-container">
        <h1 className="header-products">Products</h1>
        <div className="all-products-container">{displayProducts}</div>
      </div>
    </Fragment>
  );
}

export default FilterationSideBar;
