import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Hero.css";
import heroquality from "./heroquality.png";

const Hero = () => {
  return (
    <div className="container custom-margin-top">
      <div className="d-flex justify-content-center">
        <img
          src={heroquality}
          alt="Centered Image"
          style={{ width: "90%", height: "400px" }}
        />
      </div>
    </div>
  );
};

export default Hero;
