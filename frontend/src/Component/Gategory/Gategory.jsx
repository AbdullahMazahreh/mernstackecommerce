import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gategory.css'
import phone from './phone.svg'
import computer from './computer.svg'
import tv from './tv.svg'
import netwoke from './netwoke.svg'

const Gategory = () => {
  return (
        <div className="container my-5 py-5">
    <div className="row">
      <div className="col-12  mb-5 ">
        <p className="title  display-6 fw-bolder text-left">Hot Gategories</p>
        <div className="title_Products_line mt-3 mb-3"></div>
       
        <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card bg-gray" style={{ width: '60%', height: '200px' }}>
          <div class="card-body" style={{textAlign:"center", paddingTop:"50px" }}>
          <img src={phone} alt="Icon 3" class="icon"/>
            <p class="card-title">Smartphones and tablets</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card bg-gray"  style={{ width: '60%', height: '200px' }}>
          <div class="card-body" style={{textAlign:"center", paddingTop:"50px" }}>
            <img src={computer} alt="Icon 2" class="icon"/>
            <p class="card-title">Computer and laptops</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card bg-gray"  style={{ width: '60%', height: '200px' }}>
          <div class="card-body" style={{textAlign:"center", paddingTop:"50px"}}>
            <img src={tv} alt="Icon 3" class="icon"/>
            <p class="card-title">Tvs and monitors</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card bg-gray"  style={{ width: '60%', height: '200px' }}>
          <div class="card-body" style={{textAlign:"center", paddingTop:"50px"}}>
            <img src={netwoke}alt="Icon 4" class="icon"/>
            <p class="card-title">networke hardware</p>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
     
        
      

      
      
    </div>
      </div>
    </div>
    
    
  )
}

export default Gategory