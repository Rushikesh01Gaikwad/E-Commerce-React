import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Maincard = () => {
  const item = useSelector((state) => state);

  return (
    <div className="container-fluid py-4 maincard-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="maincard-image-container bg-green">
            <img src={item.maincard.image} className="img-fluid maincard-image" alt="Product" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="maincard-content-container">
            <h3 className="mb-3">{item.maincard.name}</h3>
            <span className="text-success mb-3"><h5>Special Price ₹ {item.maincard.price}</h5></span>
            <p className="mb-4">{item.maincard.description}</p>
            <Link to="/address">
              <button type="button" className="btn btn-primary btn-lg btn-block mb-3">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincard;
