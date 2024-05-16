import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="aligndiv">
      <nav className="navbar navbar-expand-lg text-white container-fluid mt-2" style={{ backgroundColor: "#c1caf7" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item hover mx-2">
              <Link className="nav-link" to="/">
                <h6>Home</h6>
              </Link>
            </li>
            <li className="nav-item hover mx-2">
              <Link className="nav-link" to="/electronics">
                <h6>Electronics</h6>
              </Link>
            </li>
            <li className="nav-item hover mx-2">
              <Link className="nav-link" to="/mens">
                <h6>Men's</h6>
              </Link>
            </li>
            <li className="nav-item hover mx-2">
              <Link className="nav-link" to="/women">
                <h6>Women's</h6>
              </Link>
            </li>
            <li className="nav-item hover mx-2">
              <Link className="nav-link" to="/jwellery">
                <h6>Jewellery</h6>
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <b>New Launches Mobiles, Electronics & more</b>
          </span>
        </div>
      </nav>
    </div>
  );
}
