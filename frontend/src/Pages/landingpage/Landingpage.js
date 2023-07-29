import React, { Fragment } from "react";
import { CartProvider } from "../../context/cartContext";
import {
  Hero,
  Gategory,
  Goodsnew,
  Goodspoular,
  Supersale,
  Newblog,
} from "../../components/Index";

function Landingpage() {
  return (
    <Fragment>
      <CartProvider>
        <Hero />
        <Gategory />
        <Goodsnew />
        <Goodspoular />
        <Supersale />
        <Newblog />
      </CartProvider>
    </Fragment>
  );
}

export default Landingpage;
