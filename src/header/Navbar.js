import React, { useEffect, useState } from "react";
import logo from "../Images/logo/mitraalogoo.png";
import { useSelector } from "react-redux";
import articlejson from '../articles.json';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mainCard } from "../slices/Maincardslice";

export default function Navbar() {

  const dispatch = useDispatch();

  const [btn, setBtn] = useState()

  useEffect(() => {
    let data = sessionStorage.getItem('name');
    console.log(data)
    if (data) {
      setBtn(true)
    }
  })

  const changeState = () => {
    setBtn(false)
    sessionStorage.clear();
  }

  const cartItems = useSelector(state => state.cart);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const handleSearch = (event) => {
    const term = event.target.value;
    setIsVisible(true)
    setSearchTerm(term);
    if (term.trim() !== '') {
      const results = articlejson.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]); // Clear search results if search term is empty
    }
  };

  const handleSearchResultClick = (product) => {
    dispatch(
      mainCard({
        name: product.title,
        price: product.price,
        image: product.image,
        description: product.description,
        rate: product.rating.rate,
      })
    );
  };

  const handleEvent = () => {

    setIsVisible(false);

  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#475dd6" }}>
        <div className="container-fluid">
          <a className="navbar-brand">
            <img className="complogo my-3" src={logo} alt=""></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input
              className="form-control mx-2"
              id="input"
              placeholder="Search here"
              rows="1"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button
            type="button"
            className="btn btn-light mx-2 my-3 position-relative"
            data-bs-toggle="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptionscart"
            aria-controls="offcanvasWithBothOptions"
          >
            🛒Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-warning">
              {cartItems.length}
              <span className="visually-hidden"></span>
            </span>
          </button>
          {
            btn ? (
              <div>
                <Link to='/orders'>
                  <button
                    type="button"
                    className="btn btn-light mx-2 my-3"
                  >
                    🛍️ My Orders
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-light mx-2 my-3"
                  onClick={() => changeState()}>
                  ↪️Logout
                </button>
              </div>

            ) : (

              <Link to='/login'>
                <button
                  type="button"
                  className="btn btn-light mx-2 my-3"
                >
                  👤Sign in

                </button>
              </Link>
            )
          }
        </div>
      </nav>
      <div>
        <Link to="/Mainproduct">
          <div className="container">
            {isVisible && <div className="container mt-2 searchDiv" onClick={handleEvent}>
              {searchResults.map((product) => (

                <div key={product.id} className="searchResult hover" onClick={() => handleSearchResultClick(product)}>
                  <div className="title"><b>{product.title}</b></div>
                  <div className="price"><b>₹ {product.price}</b></div>
                </div>
              ))}
            </div>}
          </div>
        </Link>
      </div>
    </div>
  );
}
