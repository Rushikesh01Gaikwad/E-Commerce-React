import React, { useState } from 'react'; // Import useState hook
import { useSelector, useDispatch } from 'react-redux';
import { getItemSelector } from '../slices/CartSlice';
import { removeFromCart } from '../slices/CartSlice';

export default function Cartsidebar() {

  const dispatch =useDispatch()

  const items = useSelector(getItemSelector);
  const total = Math.abs(items.reduce((a, b) => a + b.price, 0)).toFixed(2);
  
  // Initialize quantity state and setQuantity function
  const [quantity, setQuantity] = useState(1);

  // Function to handle increasing quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1); // Increment quantity by 1
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrement quantity by 1, but ensure it doesn't go below 1
    }
  };

  return (
    <div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptionscart" aria-labelledby="offcanvasWithBothOptionsLabel" style={{backgroundColor:'whitesmoke'}}>
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Your Cart</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h5>Your total Rs. {total}</h5>
          <h5>Your items. {items.length}</h5>
          <div className='container display'>
            <div style={{ marginTop: "2vw" }}>
              <div className='row' style={{ marginTop: "2vw" }}>
                {items.map((values) => {
                  return (
                    <>
                      <div className='col' key={values.id}>
                        <div className='my-2 '>
                          <div className="card" style={{ width: "18rem" }}>
                            <div>
                              <img src={values.image} className="card-img-top sizeimagecard" alt="..." />
                              <div className="card-body">
                                <span className="card-title"><h5>{values.name.slice(0, 30)}...</h5></span>
                              </div>
                            </div>
                            <button className=" btn position-absolute top-0 translate-middle badge rounded-pill text-bg-primary" style={{left:'90%', zIndex:'1%'}}
                            onClick={()=> dispatch(removeFromCart({id: values.id}))}
                            >Remove</button>
                            <div className="card-footer">
                              <small><b>{" Rupees ₹ "}{values.price}</b></small>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                              {/* Add onClick handlers to + and - buttons */}
                              <button type="button" className="btn btn-outline-success" onClick={increaseQuantity}>
                                +
                              </button>
                              <small className="btn btn-success" ><b>Quantity: {quantity}</b></small>
                              <button type="button" className="btn btn-outline-success" onClick={decreaseQuantity}>
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
