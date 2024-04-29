import React, { useState, useEffect } from "react";
import articlejson from "../articles.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mainCard } from "../slices/Maincardslice";

export default function Electrocatagory() {
  const dispatch = useDispatch();
  const [data, setData] = useState(articlejson);

  useEffect(() => {
    // Filter the data by 'electronics' category when component mounts
    const result = articlejson.filter(
      (item) => item.category === "electronics"
    );
    setData(result);

  }, []);
  const [priceFilter, setPriceFilter] = useState({
    below500: false,
    between500And5000: false,
    above5000: false,
    showAll: true,
  });
  const [sortType, setSortType] = useState(null);

  const handlePriceFilterChange = (filter) => {
    const updatedFilter = {
      below500: filter === "below500",
      between500And5000: filter === "between500And5000",
      above5000: filter === "above5000",
      showAll: filter === "showAll",
    };
    setPriceFilter(updatedFilter);
  };

  let filteredData = data.filter((item) => {
    if (priceFilter.showAll) return true;
    if (priceFilter.below500 && item.price <= 500) return true;
    if (priceFilter.between500And5000 && item.price > 500 && item.price <= 5000) return true;
    if (priceFilter.above5000 && item.price > 5000) return true;
    return false;
  });

  if (sortType === "asc") {
    filteredData = filteredData.sort((a, b) => a.price - b.price);
  } else if (sortType === "desc") {
    filteredData = filteredData.sort((a, b) => b.price - a.price);
  }

  const notify = () => {
    toast.success("Item added successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="all-container">
      <div className="container">
        <h4 className="">
          <b></b>
        </h4>
        <div className="row mb-4 mt-0">
          <div className="col">
            <div className="form-check form-check-inline mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="showAll"
                checked={priceFilter.showAll}
                onChange={() => handlePriceFilterChange("showAll")}
              />
              <label className="form-check-label" htmlFor="showAll">
                Show All
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="below500"
                checked={priceFilter.below500}
                onChange={() => handlePriceFilterChange("below500")}
              />
              <label className="form-check-label" htmlFor="below500">
                Below ₹500
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="between500And5000"
                checked={priceFilter.between500And5000}
                onChange={() => handlePriceFilterChange("between500And5000")}
              />
              <label className="form-check-label" htmlFor="between500And5000">
                ₹500 - ₹5000
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="above5000"
                checked={priceFilter.above5000}
                onChange={() => handlePriceFilterChange("above5000")}
              />
              <label className="form-check-label" htmlFor="above5000">
                Above ₹5000
              </label>
            </div>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input
                type="radio"
                className="btn-check"
                name="sortType"
                id="asc"
                autoComplete="off"
                checked={sortType === "asc"} // Check if sortType is "asc"
                onChange={() => setSortType("asc")} // Set sortType to "asc" on change
              />
              <label className="btn btn-outline-primary" htmlFor="asc">
                Ascending
              </label>

              <input
                type="radio"
                className="btn-check"
                name="sortType"
                id="desc"
                autoComplete="off"
                checked={sortType === "desc"} // Check if sortType is "desc"
                onChange={() => setSortType("desc")} // Set sortType to "desc" on change
              />
              <label className="btn btn-outline-primary" htmlFor="desc">
                Descending
              </label>
            </div>

          </div>
        </div>
        <div className="row">
          {filteredData.map((values) => (
            <div className="col-md-4 mb-4" key={values.id}>
              <div className="card">
                <Link to="/Mainproduct">
                  <img
                    src={values.image}
                    className="card-img-top sizeimagecard"
                    onClick={() =>
                      dispatch(
                        mainCard({
                          name: values.title,
                          price: values.price,
                          image: values.image,
                          description: values.description,
                          rate: values.rating.rate,
                        })
                      )
                    }
                    alt="Product"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{values.title.slice(0, 40)}...</h5>
                  <p className="card-text">
                    {values.description.slice(0, 40)}...
                  </p>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-muted">
                      <b>Rating: {values.rating.rate}</b>
                    </p>
                    <p className="text-muted">
                      <b>₹ {values.price}</b>
                    </p>
                  </div>
                  <div className="container d-grid gap-2">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        dispatch(
                          addItem({
                            id: values.id,
                            name: values.title,
                            price: values.price,
                            image: values.image,
                          })
                        );
                        notify();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
