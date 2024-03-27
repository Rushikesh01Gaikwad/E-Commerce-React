import React, {useState} from "react";
import logo from "../Images/logo/mitraalogoo.png";
import { useSelector } from "react-redux";
import articlejson from '../articles.json'

export default function Navbar() {

  const [searchTerm, setSerchTerm] = useState("")

  const cartItems = useSelector(state => state.cart)

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#0074eb" }}>
        <div className="container-fluid">
          <a className="navbar-brand">
            <img className="complogo my-3" src={logo} alt=""></img>
          </a>
          <div className="dropdown mx-1">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input
                className="form-control mx-2"
                id="input"
                placeholder="Search here"
                rows="1"
                onChange={(event)=>{
                  setSerchTerm(event.target.value);
                }}
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
            className="btn btn-light mx-2 my-3 position-relative"
            data-bs-toggle="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptionscart"
            aria-controls="offcanvasWithBothOptions"
          >
            🛒Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-warning">
            {cartItems.length}  
              <span class="visually-hidden"></span>
            </span>
          </button>
        </div>
      </nav>
      <div className="template_Container">
              {
                articlejson 
                  .filter((val) => {
                    if(searchTerm === ""){
                      return null
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                    }
                  })
                  .map((val) => {
                    return(
                      <div className="template" key={val.id}>
                          <h3>{val.title}</h3>
                          <h3>{val.price}</h3>
                      </div> 
                    )
                  })
              }
            </div>
    </div>
  );
}
