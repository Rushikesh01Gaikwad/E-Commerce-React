import React, { useState, useEffect } from 'react';
import articlejson from '../articles.json';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mainCard } from '../slices/Maincardslice';

export default function Electrocatagory() {
  const dispatch = useDispatch();
  const [data, setData] = useState(articlejson);

  useEffect(() => {
    // Filter the data by 'electronics' category when component mounts
    const result = articlejson.filter(item => item.category === "women's clothing");
    setData(result);
  }, []);

  const notify = () => {
    toast.success('Item added successfully', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-4"><b>Womens</b></h4>
      <div className="row">
        {data.map((values) => (
          <div className="col-md-4 mb-4" key={values.id}>
            <div className="card">
              <Link to="/Mainproduct">
              <img src={values.image} className="card-img-top sizeimagecard" onClick={() => dispatch(mainCard({ name: values.title, price: values.price, image: values.image, description: values.description, rate: values.rating.rate }))} alt="Product" />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{values.title.slice(0, 40)}...</h5>
                <p className="card-text">{values.description.slice(0, 40)}...</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted"><b>Rating: {values.rating.rate}</b></p>
                  <p className="text-muted"><b>₹ {values.price}</b></p>
                </div>
                <div className="container d-grid gap-2">
                  <button className="btn btn-success" onClick={() => { dispatch(addItem({ name: values.title, price: values.price, image: values.image })); notify(); }}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
