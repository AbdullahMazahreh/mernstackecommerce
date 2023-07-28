import React from 'react'
import img1 from './img1.webp';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';

import { Button } from 'react-bootstrap';
const newblog = () => {
  return (
    <div className="container my-5 py-5">
    <div className="row">
      <div className="col-12  mb-5 ">
        <p className="title  display-6 fw-bolder text-left">New blog</p>
        <div className="title_Products_line mt-3 mb-3"></div>
        
      </div>
      <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img
            src={img1}
            alt="Image 1"
            className="img-fluid"
            style={{ width: '70%', height: '200px' }}
          />
          <p>Description for Image 1</p>
        </div>
        <div className="col-md-3">
          <img
            src={img2}
            alt="Image 2"
            className="img-fluid"
            style={{ width: '70%', height: '200px' }}
          />
          <p>Description for Image 2</p>
        </div>
        <div className="col-md-3">
          <img
            src={img3}
            alt="Image 3"
            className="img-fluid"
            style={{ width: '70%', height: '200px' }}
          />
          <p>Description for Image 3</p>
        </div>
        <div className="col-md-3">
          <img
            src={img4}
            alt="Image 4"
            className="img-fluid"
            style={{ width: '70%', height: '200px' }}
          />
          <p>Description for Image 4</p>
        </div>
      </div>
    </div>
     
    </div>
    <div className="text-center mt-3">
              <Button variant="warning" >Show More</Button>
            </div>
    
    </div>
  )
}

export default newblog