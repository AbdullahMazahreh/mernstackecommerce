


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./Hero.css";
import hero from'./hero.png'

const Hero = () => {
  return (
    <div className="container custom-margin-top">
    <div className="d-flex justify-content-center">
    <img src={hero} alt="Centered Image"  style={{ width: '80%', height: '250px' }}/>
  </div>
  </div>
  )
}

export default Hero




