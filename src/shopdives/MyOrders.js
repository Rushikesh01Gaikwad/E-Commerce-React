import React from 'react';
import { useSelector } from 'react-redux';

export default function MyOrders() {
  const orderDetails = useSelector(state => state.myOrder);
  console.log(orderDetails)

  return (
    <div>
      <div className="container">
        <div className="ordersPage">
          {orderDetails && orderDetails.map(order => (
            <div className="card" key={order.id} style={{ width: "18rem" }}>
              <img src={order.image} className="card-img-top" alt={order.name} />
              <div className="card-body">
                <h5 className="card-title">{order.name}</h5>
                <p className="card-text">Quantity: {order.quantity}</p>
                <p className="card-text">Price: ₹{order.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
