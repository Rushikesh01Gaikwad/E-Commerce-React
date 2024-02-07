import React from 'react';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#009698'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img className="complogo" src='https://www.indiantextilemagazine.in/wp-content/uploads/2023/11/atlas-copco-group-logo-white-box-copy.jpg' alt=""></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <button type="button" className="btn btn-light font-weight-bold mx-2" data-bs-toggle="button">Location</button>
      </ul>
      <div className="dropdown mx-3">
        <button className="btn custom-button dropdown-toggle btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Select Country
        </button>
        <ul class="dropdown-menu">
          <li><a className="dropdown-item" href="/">Action</a></li>
          <li><a className="dropdown-item" href="/">Another action</a></li>
          <li><a className="dropdown-item" href="/">Something else here</a></li>
        </ul>
      </div>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </div>
    <button type="button" className="btn btn-light font-weight-bold mx-2" data-bs-toggle="button">🔤Language</button>
    <button type="button" className="btn btn-light font-weight-bold mx-2" data-bs-toggle="button">👤Sign in</button>
    <button type="button" className="btn btn-light font-weight-bold mx-2" data-bs-toggle="button">🛒Cart</button>
  </div>
</nav>
    </div>
  )
}
