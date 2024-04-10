import React, { useState } from "react";
import articlejson from "../articles.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mainCard } from "../slices/Maincardslice";

export default function Viewcards() {
    const dispatch = useDispatch();
    const [data, setData] = useState(articlejson);
    const [priceFilter, setPriceFilter] = useState({
        below500: false,
        above500: false,
        showAll: true,
    });
    const [sortType, setSortType] = useState(null);

    const handlePriceFilterChange = (filter) => {
        const updatedFilter = {
            below500: filter === "below500" ? !priceFilter.below500 : false,
            above500: filter === "above500" ? !priceFilter.above500 : false,
            showAll: filter === "showAll" ? !priceFilter.showAll : false,
        };
        setPriceFilter(updatedFilter);
    };

    let filteredData = data.filter((item) => {
        if (priceFilter.showAll) return true;
        if (priceFilter.below500 && item.price <= 500) return true;
        if (priceFilter.above500 && item.price > 500) return true;
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
        <div className="container mt-4">
            {/* Filter Section */}
            <div className="row mb-3">
                <div className="col">
                    <div className="form-check form-check-inline">
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
                            id="above500"
                            checked={priceFilter.above500}
                            onChange={() => handlePriceFilterChange("above500")}
                        />
                        <label className="form-check-label" htmlFor="above500">
                            Above ₹500
                        </label>
                    </div>
                    <div className="btn-group ml-3">
                        <button className="btn btn-primary mx-3" onClick={() => setSortType("asc")}>
                            Sort Ascending
                        </button>
                        <button className="btn btn-primary" onClick={() => setSortType("desc")}>
                            Sort Descending
                        </button>
                    </div>
                </div>
            </div>

            {/* Item Display */}
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
                                <p className="card-text">{values.description.slice(0, 40)}...</p>
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
    );
}
