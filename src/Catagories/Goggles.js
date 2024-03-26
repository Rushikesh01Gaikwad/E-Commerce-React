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
    const result = articlejson.filter(item => item.category === 'goggle');
    setData(result);
  }, []);

  const sortByPrice = (order) => {
    if (order === 'highToLow') {
      setData([...data].sort((a, b) => b.price - a.price));
    } else if (order === 'lowToHigh') {
      setData([...data].sort((a, b) => a.price - b.price));
    }
  };

  const sortAlphabetically = (order) => {
    if (order === 'aToZ') {
      setData([...data].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (order === 'zToA') {
      setData([...data].sort((a, b) => b.title.localeCompare(a.title)));
    }
  };

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
      <button
        className="btn btn-outline-dark rounded-pill"
        style={{ float: "right" }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span className="me-2"></span> 🔎 <b>Filter</b>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header bg-primary text-white py-3">
          <h4 className="offcanvas-title" id="offcanvasRightLabel">Filter Data</h4>
          <button type="button" className="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="mb-3">
            <button className="btn btn-warning w-100 mb-3" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
              <b>Select Price</b>
            </button>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                <div className="form-check">
                  <input type="radio" className="btn-check" name="options-base" id="option1" autoComplete="off" />
                  <label className="btn btn-outline-success w-100 mb-2" htmlFor="option1" onClick={() => sortByPrice('highToLow')}>
                    High to low
                  </label>

                  <input type="radio" className="btn-check" name="options-base" id="option2" autoComplete="off" />
                  <label className="btn btn-outline-success w-100" htmlFor="option2" onClick={() => sortByPrice('lowToHigh')}>
                    Low to high
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-warning w-100 mb-3" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
              <b>Sort A to Z | Z to A</b>
            </button>
            <div className="collapse" id="collapseExample2">
              <div className="card card-body">
                <div className="form-check">
                  <input type="radio" className="btn-check" name="options-base" id="option3" autoComplete="off" />
                  <label className="btn btn-outline-success w-100 mb-2" htmlFor="option3" onClick={() => sortAlphabetically('aToZ')}>
                    A to Z
                  </label>

                  <input type="radio" className="btn-check" name="options-base" id="option4" autoComplete="off" />
                  <label className="btn btn-outline-success w-100" htmlFor="option4" onClick={() => sortAlphabetically('zToA')}>
                    Z to A
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="mb-4"><b>Goggles</b></h4>
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
                  <button className="btn btn-success" onClick={() => { dispatch(addItem({ id:values.id, name: values.title, price: values.price, image: values.image })); notify(); }}>Add to Cart</button>
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
