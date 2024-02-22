import React from 'react'

export default function Maincard() {
  return (
    <div>
      <div className="container divtopmarg maincarddiv">
        <div className="sizeadjustdivmaincard">
          <div className="adjustmainproductimg">
            <img src="https://www.fancydresswale.com/cdn/shop/products/boyblue1_1024x1024.jpg?v=1597313834" className="img-thumbnail" alt="..."/>
          </div>
        </div>
        <div className="adjustrightcontaintmainimg">
          <h3>Boys Treditional shirt</h3>
          <span style={{color:'green'}}>Special offer</span>
          <div style={{display:'flex'}}>
            <h4>₹550</h4>
          </div>
          <button type="button" className="btn btn-outline-primary btn-lg mx-5 my-3">Buy Now</button>
          <button type="button" className="btn btn-outline-primary btn-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
