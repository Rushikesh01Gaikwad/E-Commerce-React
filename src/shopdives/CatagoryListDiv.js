import React from 'react';
import { Link } from 'react-router-dom';
import Carosel from '../slides/Carosel';

export default function CatagoryListDiv() {
  return (
    <div>
      <Carosel />
      <div className="container">
        <div className="my-4">
          <h4 className="mb-4"><b>Top Brands</b></h4>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="card-img-top sizeimagecard" alt="..." />
                <div className="card-body bg-primary text-white">
                  <h5 className="card-title">Fjallraven - Foldsack No. 1 Backpack</h5>
                </div>
                <div className="card-footer">
                  <small className="text-muted"><b>Rating: 3.9</b></small>
                  <span className="float-end"><b>from ₹ 399</b></span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" className="card-img-top sizeimagecard" alt="..." />
                <div className="card-body bg-primary text-white">
                  <h5 className="card-title">Mens Casual Premium Fit T-Shirts</h5>
                </div>
                <div className="card-footer">
                  <small className="text-muted"><b>Rating: 4.1</b></small>
                  <span className="float-end"><b>from ₹ 299</b></span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" className="card-img-top sizeimagecard" alt="..." />
                <div className="card-body bg-primary text-white">
                  <h5 className="card-title">Mens Cotton Jacket</h5>
                </div>
                <div className="card-footer">
                  <small className="text-muted"><b>Rating: 4.7</b></small>
                  <span className="float-end"><b>from ₹ 399</b></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end">
          <Link type="button" className="btn btn-primary" to='/products'><b>View More...</b></Link>
        </div>
      </div>
    </div>
  );
}
