import React from 'react';
import usericon from '../Images/icons/usericon.png';

export default function SignInPopup() {
  return (
    <div className="modal fade" id="staticBackdropsignin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-light">
            <h5 className="modal-title text-primary">Sign In</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="text-center mb-4">
              <img src={usericon} className="usericonlogo" alt="Login user" />
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
              </div>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-primary btn-lg">Sign In</button>
              </div>
            </form>
          </div>
          <div className="modal-footer justify-content-between bg-light">
            <button type="button" className="btn btn-link text-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropsignup">Sign Up</button>
            <button type="button" className="btn btn-link text-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
