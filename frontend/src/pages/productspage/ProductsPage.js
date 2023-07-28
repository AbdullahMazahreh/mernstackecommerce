import React, { Fragment } from "react";
import "./productspage.css";
import { Navbar, Footer, FilterationSideBar } from "../../components/Index";

function ProductsPage() {
  return (
    <Fragment>
      <Navbar />
      <FilterationSideBar />
      <Footer />
    </Fragment>
  );
}

export default ProductsPage;
