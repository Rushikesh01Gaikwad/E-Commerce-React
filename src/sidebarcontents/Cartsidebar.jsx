import React, { useState } from 'react'; // Import useState hook
import { useSelector, useDispatch } from 'react-redux';
import { getItemSelector } from '../slices/CartSlice';
import { removeFromCart } from '../slices/CartSlice';
import { useNavigate } from "react-router-dom";
import { myOrder } from '../slices/MyOrder';

export default function CartSidebar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector(getItemSelector);

  // Initialize quantity state for each item
  const [quantities, setQuantities] = useState({});

  // Function to handle increasing quantity for a specific item
  const increaseQuantity = (itemId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1
    }));
  };

  // Function to handle decreasing quantity for a specific item
  const decreaseQuantity = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1
      }));
    }
  };

  // Calculate total based on item prices and quantities
  const total = items.reduce((acc, item) => {
    const quantity = quantities[item.id] || 1; // Default to 1 if quantity is not set
    return acc + (item.price * quantity);
  }, 0).toFixed(2);

  const handleBuyNow = () => {

    const formatDate = (date) => {
      const d = new Date(date);
      const day = (`0${d.getDate()}`).slice(-2);
      const month = (`0${d.getMonth() + 1}`).slice(-2);
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const orderDetails = items.map(item => ({
      id: item.id,
      name: item.name,
      quantity: quantities[item.id] || 1,
      price: item.price,
      image: item.image,
      date: formatDate(new Date())
    }));
    dispatch(myOrder(orderDetails));
    navigate(`/address?total=${total}`); // Navigate to MyOrders page
  };

  return (
    <div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptionscart" aria-labelledby="offcanvasWithBothOptionsLabel" style={{ backgroundColor: 'whitesmoke' }}>
        <div className="offcanvas-header bg-primary text-white py-3">
          <h4 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Your Cart</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className='container display'>
            <div style={{ marginTop: "2vw" }}>
              <div className='row justify-content-center' style={{ marginTop: "2vw" }}>
                {items.length === 0 ? (
                  <div className="col-12 text-center">
                    <h4>Your cart is empty</h4>
                  </div>
                ) : (
                  items.map((values) => {
                    const itemId = values.id;
                    const itemQuantity = quantities[itemId] || 1;
                    return (
                      <div className='col' key={itemId}>
                        <div className='my-2 '>
                          <div className="card" style={{ width: "18rem" }}>
                            <div>
                              <img src={values.image} className="card-img-top sizeimagecard" alt="..." />
                              <div className="card-body">
                                <span className="card-title"><h5>{values.name.slice(0, 30)}...</h5></span>
                              </div>
                            </div>
                            <button className=" btn position-absolute top-0 translate-middle badge rounded-pill text-bg-primary" style={{ left: '90%', zIndex: '1%' }}
                              onClick={() => dispatch(removeFromCart({ id: itemId }))}
                            >Remove</button>
                            <div className="card-footer">
                              <small><b>{" Rupees ₹ "}{values.price}</b></small>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                              {/* Add onClick handlers to + and - buttons with item ID */}
                              <button type="button" className="btn btn-outline-success" onClick={() => increaseQuantity(itemId)}>
                                +
                              </button>
                              <small className="btn btn-success" ><b>Quantity: {itemQuantity}</b></small>
                              <button type="button" className="btn btn-outline-success" onClick={() => decreaseQuantity(itemId)}>
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </div>
        {items.length > 0 && (
          <div className="offcanvas-footer bg-secondary py-3 px-4">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-white mb-0">Your total: Rs. {total}</h4>
                <button type="button" className="btn btn-warning" data-bs-dismiss="offcanvas" onClick={handleBuyNow}><b>Buy Now</b></button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
