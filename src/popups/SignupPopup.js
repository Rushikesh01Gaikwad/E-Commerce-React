import React from 'react'
import usericon from '../Images/icons/usericon.png'

export default function SignupPopup() {
  return (
    <div>
      <div>
      <div className="modal fade" id="staticBackdropsignup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header" style={{backgroundColor:"whitesmoke"}}>
                <h1 className="modal-title fs-5" id="staticBackdropLabel"><h4>Sign Up</h4></h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="text-center">
              <img src={usericon} className="usericonlogo" alt="login user"/>
            </div>
            <div className="modal-body">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label"><h5>Full Name: </h5></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name here"/>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label"><h5>Email: </h5></label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your email here"/>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label"><h5>Mobile Number:  </h5></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Mobile number"/>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label"><h5>Password: </h5></label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password"/>
              </div>
            </form>
            </div>  
            <div className="modal-footer justify-content-around" style={{backgroundColor:"whitesmoke"}}>
                <button type="button" className="btn hover"><h6>Submit</h6></button>
                <button type="button" className="btn hover" data-bs-dismiss="modal"><h6>Close</h6></button>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
