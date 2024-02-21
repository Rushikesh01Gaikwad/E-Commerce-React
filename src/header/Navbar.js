import React from "react";
import logo from "../Images/logo/mitraalogoo.png";


export default function Navbar() {

  const name='locbtn'

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#009698" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <img className="complogo my-3" src={logo} alt=""></img>
          </a>
          <button
            className="navbar-toggler my-3"
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
              <button
                id={name}
                type="button"
                className="btn btn-light font-weight-bold mx-2 my-3"
                data-bs-toggle="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptionsone"
                aria-controls="offcanvasWithBothOptions"
              >
                Location
              </button>
            </ul>
            <div className="dropdown mx-3">
              <button
                className="btn custom-button dropdown-toggle btn-light my-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Select Country
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    India
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    USA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Canada
                  </a>
                </li>
              </ul>
            </div>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <button
            type="button"
            className="btn btn-light mx-2 my-3"
            data-bs-toggle="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdroplang"
          >
            🔤Language
          </button>
          <button
            type="button"
            className="btn btn-light mx-2 my-3"
            data-bs-toggle="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropsignin"
          >
            👤Sign in
          </button>
          <button
            type="button"
            className="btn btn-light mx-2 my-3"
            data-bs-toggle="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptionscart"
            aria-controls="offcanvasWithBothOptions"
          >
            🛒Cart
          </button>
        </div>
      </nav>
    </div>
  );
}
