import "./App.css";
import React, { Fragment } from "react";
import { Admindashboard, ProductsPage } from "./components/Index";

function App() {
  return (
    <Fragment>
      <ProductsPage />
      {/* <Admindashboard /> */}
    </Fragment>
  );
}

export default App;
