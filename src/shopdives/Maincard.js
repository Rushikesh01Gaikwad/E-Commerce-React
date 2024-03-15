import React from 'react'

const Maincard=()=> {

    return (
      <div>
        <div className="container divtopmarg maincarddiv">
          <div className="sizeadjustdivmaincard">
            <div className="adjustmainproductimg">
              <img src="" className="img-thumbnail" alt="..."/>
            </div>
          </div>
          <div className="adjustrightcontaintmainimg">
            <h3>Your Product</h3>
            <span style={{color:'green'}}>Special offer</span>
            <div style={{display:'flex'}}>
              <h4>description</h4>
            </div>
            <button type="button" className="btn btn-outline-primary btn-lg mx-5 my-3">Buy Now</button>
            <button type="button" className="btn btn-outline-primary btn-lg">Add to Cart</button>
          </div>
        </div>
    </div>
    )
  }

export default Maincard;
