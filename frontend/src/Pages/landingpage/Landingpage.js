import React, { Fragment } from "react";
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
      <Hero />
      <Gategory />
      <Goodsnew />
      <Goodspoular />
      <Supersale />
      <Newblog />
    </Fragment>
  );
}

export default Landingpage;
