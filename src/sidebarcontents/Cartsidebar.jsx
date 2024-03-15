import React from 'react';
import { useSelector } from 'react-redux';
import { getItemSelector } from '../slices/CartSlice';

export default function Cartsidebar() {

  const items = useSelector(getItemSelector);
  const total = Math.abs(items.reduce((a, b)=> a + b.price, 0)).toFixed(2);
  console.log("items", items)
  

  return (
    <div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptionscart" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Your Cart</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h5>Your total items are {items.length} </h5>
          <h5>Your total Rs. {total}</h5>
          <div className='container display'>
            <div style={{marginTop:"2vw"}}>
                <div className='row' style={{marginTop:"2vw"}}>
                  {items.map((values)=>{
                    return(
                      <>
                      <div className='col' key={values.id}>
                        <div className='my-2 '>
                        

                          <div className="card" style={{width:"18rem"}}>
                          <img src={values.image} className="card-img-top sizeimagecard" alt="..."/>
                          <button type="button" className="btn" style={{backgroundColor:"#009698",borderRadius:'0px'}} to='/Mainproduct'>
                              <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                                <span className="card-title"><h5>{values.name.slice(0, 30)}...</h5></span>
                              </div></button>
                              {/* <span class="position-absolute top-0 translate-middle badge rounded-pill text-bg-success" style={{left:'90%', zIndex:'1%'}}> Added to cart </span> */}
                              <div className="card-footer">
                                <small><b>{" Rupees ₹ "}{values.price}</b></small>
                              </div>
                              <div className="card-footer d-flex justify-content-between">
                                <button type="button" className="btn btn-outline-success">
                                  +
                                </button>
                                <small><b>Quantity: 1</b></small>
                                <button type="button" className="btn btn-outline-success">
                                  -
                                </button>
                              </div>
                          </div>
                        </div>
                      </div>
                      </>
                    )
                  })} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
