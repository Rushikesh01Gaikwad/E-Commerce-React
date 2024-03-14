import React from 'react';
import { useSelector } from 'react-redux';
import { getItemSelector } from '../slices/CartSlice';

export default function Cartsidebar() {

  const items = useSelector(getItemSelector);
  const total = items.reduce((a, b)=> a + b.price, 0)
  

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
        </div>
      </div>
    </div>
  )
}
