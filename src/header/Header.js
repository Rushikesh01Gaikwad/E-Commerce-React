import React from 'react'

export default function Header() {
  return (
    <div className="aligndiv" style={{marginLeft:"10px"}}>
      <nav className="navbar navbar-expand bg-body-tertiary container-fluid">
        <label><h6>All ➡️</h6></label>
        <button type="button" className="btn hover" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><h6>Best Sellers</h6></button>
        <button type="button" className="btn hover" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><h6>Today's Deals</h6></button>
        <button type="button" className="btn hover" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><h6>Men's</h6></button>
        <button type="button" className="btn hover" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><h6>Women's</h6></button>
        <button type="button" className="btn hover" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><h6>Gift Ideas</h6></button>
        <button type="button" className="btn hover" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><h6>Fashion</h6></button>
        
        <p className="ms-auto"></p>
        <h6>New Launches Mobiles, Electronics {"&"} more |</h6>
        <button type="button" className="btn hover"><h6>Shop Now</h6></button>
      </nav>
    </div>
  )
}


