import React from 'react'
import { Link } from 'react-router-dom'
import Carosel from '../slides/Carosel';

export default function CatagoryListDiv() {
  return (
      <div>
          <Carosel/>
          <div>
          <Link type="button" className="btn" to='/products' style={{float:"right", marginTop:'2vw'}}><big><b>View More...</b></big></Link>
            <div className="container display">
            <div className="divtopmarg">
            <h4><b>Top Brands</b></h4>
            <br/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="card-img-top sizeimagecard" alt="..."/>
                    <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/Mainproduct'>
                        <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                            <span className="card-title"><h5>Fjallraven - Foldsack No. 1 Backpack</h5></span>
                        </div>
                    </Link>
                    <div className="card-footer">
                        <small className="text-body-secondary"><b>Rating: 3.9</b></small>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary"><b>₹ 109.95</b></small>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" className="card-img-top sizeimagecard" alt="..."/>
                    <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/Mainproduct'>
                        <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                            <span className="card-title"><h5>Mens Casual Premium Fit T-Shirts</h5></span>
                        </div>
                    </Link>
                    <div className="card-footer">
                        <small className="text-body-secondary"><b>Rating: 4.1</b></small>
                    </div>
                    <div className="card-footer">
                    <small className="text-body-secondary"><b>₹ 22.3</b></small>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" className="card-img-top sizeimagecard" alt="..."/>
                    <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/Mainproduct'>
                        <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                            <span className="card-title"><h5>Mens Cotton Jacket</h5></span>
                        </div>
                    </Link>
                    <div className="card-footer">
                        <small className="text-body-secondary"><b>Rating: 4.7</b></small>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary"><b>₹ 55.99</b></small>
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
