import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyOrders() {

  let email = sessionStorage.getItem('email');
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/Data?email=${email}`)
      .then(response => {
        if (response.data && response.data.length > 0) {
          setOrderDetails(response.data[0].order);
        }
      })
      .catch(error => {
        console.error('Error fetching order data:', error);
      });
  }, [email]);

  return (
    <div className='container mt-2'>
      {orderDetails.length === 0 ? (
        <div className="row">
          <div className="col-12">
            <div className="alert alert-warning" role="alert">
              No orders found.
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          {orderDetails.map(order => (
            <div className="col-md-4 mb-4" key={order.id}>
              <div className="card">
                <img src={order.image} className="card-img-top sizeimagecard" alt={order.name || order.title} />
                <div className="card-body">
                  <h5 className="card-title">{order.name.slice(0, 35) || order.title.slice(0, 35)}</h5>
                  <p className="card-text mt-1">Quantity: {order.quantity}</p>
                </div>
                <div className="card-footer">
                  <div className='d-flex justify-content-around'>
                    <p className="card-text"><b>Price: ₹{order.price}</b></p>
                    <p className='card-text'><b>Date: {order.date || 'N/A'}</b></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
