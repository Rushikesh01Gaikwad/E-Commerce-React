import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-body-tertiary container-fluid">
        <button type="button" className="btn"><h6>All >> </h6></button>
        <button type="button" className="btn"><h6>Best Sellers</h6></button>
        <button type="button" className="btn"><h6>Today's Deals</h6></button>
        <button type="button" className="btn"><h6>Mobiles</h6></button>
        <button type="button" className="btn"><h6>Home & Kitchen</h6></button>
        <button type="button" className="btn"><h6>Gift Ideas</h6></button>
        <button type="button" className="btn"><h6>Fashion</h6></button>
        
        <p className="ms-auto"></p>
        <h6>New Launches Mobiles, Electronics & more |</h6>
        <button type="button" className="btn"><h6>Shop Now</h6></button>
      </nav>
    </div>
  )
}


