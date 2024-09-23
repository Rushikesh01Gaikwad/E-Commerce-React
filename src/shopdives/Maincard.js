import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { myOrder } from '../slices/MyOrder';

const Maincard = () => {
  const item = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = [];

  const handleBuyNow = () => {
    let name = sessionStorage.getItem("name");

    if (name === "" || name === null) {
      navigate("/login");
    } else {
      const formatDate = (date) => {
        const d = new Date(date);
        const day = `0${d.getDate()}`.slice(-2);
        const month = `0${d.getMonth() + 1}`.slice(-2);
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      };

      // const orderDetails = items.map((item) => ({
      //   id: item.id,
      //   name: item.name,
      //   quantity: quantities[item.id] || 1,
      //   price: item.price,
      //   image: item.image,
      //   date: formatDate(new Date()),
      // }));

      items.push(item.maincard.id, item.maincard.name, item.maincard.price, item.maincard.image, item.maincard.date)
      dispatch(myOrder(items));
      navigate(`/address?total=${item.maincard.price}`); // Navigate to MyOrders page
    }
  };

  return (
    <div className="container-fluid py-4 maincard-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="maincard-image-container bg-green">
            <img
              src={item.maincard.image}
              className="img-fluid maincard-image"
              alt="Product"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="maincard-content-container">
            <h3 className="mb-3">{item.maincard.name}</h3>
            <span className="text-success mb-3">
              <h5>Special Price ₹ {item.maincard.price}</h5>
            </span>
            <p className="mb-4">{item.maincard.description}</p>
          </div>
          <button className="btn btn-outline-primary" onClick={handleBuyNow}>
            {" "}
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maincard;
