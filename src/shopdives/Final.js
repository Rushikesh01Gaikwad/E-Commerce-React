import React from "react";
import doneGif from '../done_gif.gif'
import { Link } from "react-router-dom";

export default function Final() {

    return (
        <div className="container mt-2">
            <div className="final-bg">
                <h3 style={{ color: "green" }}>Your Order Placed Successfully  👍</h3><br />
                <img src={doneGif} width='600' />
                <div className="d-flex flex-row-reverse">
                    <Link to='/orders'>
                        <h5>Go to My Orders</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}