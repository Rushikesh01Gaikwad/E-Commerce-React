import React from 'react'
import { useSelector } from 'react-redux';

const Maincard=()=> {

  const item = useSelector((state)=>state);

    return (
      <div>
        <div className="container divtopmarg maincarddiv">
          <div className="sizeadjustdivmaincard">
            <div className="adjustmainproductimg">
              <img src={item.maincard.image} className="img-thumbnail" alt="..."/>
            </div>
          </div>
          <div className="adjustrightcontaintmainimg">
            <h3>{item.maincard.name}</h3>
            <span style={{color:'green'}}>Special offer</span>
            <div style={{display:'flex'}}>
              <h4>{item.maincard.description}</h4>
            </div>
            <button type="button" className="btn btn-outline-primary btn-lg mx-5 my-3">Buy Now</button>
          </div>
        </div>
    </div>
    )
  }

export default Maincard;
