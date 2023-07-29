import React, { Fragment } from "react";
import "./productspage.css";
import { FilterationSideBar } from "../../components/Index";
import { CartProvider } from "../../context/cartContext";
function ProductsPage() {
  return (
    <Fragment>
      <CartProvider>
        <FilterationSideBar />
      </CartProvider>
    </Fragment>
  );
}

export default ProductsPage;
