import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mainCard } from "../slices/Maincardslice";

function Viewcards(props) {
    const dispatch = useDispatch();

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
        <div>
            <div className="container display">
                <div className="divtopmarg">
                    <div className="my-2">
                        <div className="card" style={{ width: "18rem" }}>
                            <Link
                                type="button"
                                className="btn"
                                onClick={() =>
                                    dispatch(
                                        mainCard({
                                            name: props.title,
                                            price: props.price,
                                            image: props.image,
                                            description: props.description,
                                            rate: props.rating.rate,
                                        })
                                    )
                                }
                                to="/Mainproduct"
                            >
                                <img
                                    src={props.image}
                                    className="card-img-top sizeimagecard"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <span className="card-title">
                                        <h5>{props.title}</h5>
                                    </span>
                                </div>
                            </Link>
                            <div className="card-footer">
                                <small className="text-body-secondary">
                                    {props.description.slice(0, 40)}...
                                </small>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="text-muted">
                                        <b>Rating: {props.rating.rate}</b>
                                    </p>
                                    <p className="text-muted">
                                        <b>₹ {props.price}</b>
                                    </p>
                                </div>
                                <div className="container d-grid gap-2">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            dispatch(
                                                addItem({
                                                    id: props.id, 
                                                    name: props.title, 
                                                    price: props.price, 
                                                    image: props.image
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
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Viewcards;
