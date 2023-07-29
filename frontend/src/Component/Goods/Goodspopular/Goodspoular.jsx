import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import exchangequality from "./exchangequality.png";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import img1 from "./img1.webp";
import img2 from "./img2.webp";
import img3 from "./img3.webp";
import img4 from "./img4.webp";

const Goodspoular = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12  mb-5 ">
          <p className="title  display-6 fw-bolder text-left">Pouplor Good</p>
          <div className="title_Products_line mt-3 mb-3"></div>

          <div className="d-flex flex-wrap justify-content-around">
            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={img4}
                alt="Product Image"
                style={{ width: "100%", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>Product description goes here.</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  $19.99
                </Card.Subtitle>
                <Link to="/products">
                  <Button variant="warning">Buy Now</Button>
                </Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={img1}
                alt="Product Image"
                style={{ width: "100%", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>Product description goes here.</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  $19.99
                </Card.Subtitle>
                <Link to="/products">
                  <Button variant="warning">Buy Now</Button>
                </Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={img2}
                alt="Product Image"
                style={{ width: "100%", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>Product description goes here.</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  $19.99
                </Card.Subtitle>
                <Link to="/products">
                  <Button variant="warning">Buy Now</Button>
                </Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={img3}
                alt="Product Image"
                style={{ width: "100%", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>Product description goes here.</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  $19.99
                </Card.Subtitle>
                <Link to="/products">
                  <Button variant="warning">Buy Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="container custom-margin-top">
        <div className="d-flex justify-content-center">
          <img
            src={exchangequality}
            alt="Centered Image"
            style={{ width: "80%", height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Goodspoular;
