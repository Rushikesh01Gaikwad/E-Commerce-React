import React, { useState } from "react";
import usericon from "../Images/icons/usericon.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function SignInPopup() {
  const [eml, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const usenavigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("proceed")
      fetch('http://localhost:3000/Data?' + eml).then((res) => {
        return res.json();
      }).then((resp) => {
        console.log(resp)
        if (Object.keys(resp).length === 0) {
          console.log("Enter valid email")
        }
        else {
          if (resp.mobile === pass) {
            console.log("login successfully")
            //usenavigate('/')
          }
          else {
            console.log("Enter valid credential")
          }
        }
      }).catch((err) => {
        console.log("login failed due to " + err.message);
      })
    }
  };
  const validate = () => {
    let result = true;
    if (eml === "" || eml === null) {
      result = false;
      console.log("enter the username");
    }
    if (pass === "" || pass === null) {
      result = false;
      console.log("enter the password");
    }
    return result
  };

  return (
    // <div
    //   className="modal fade"
    //   id="staticBackdropsignin"
    //   data-bs-backdrop="static"
    //   data-bs-keyboard="false"
    //   tabIndex="-1"
    //   aria-labelledby="staticBackdropLabel"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog modal-dialog-centered">
    //     <div className="modal-content">
    //       <div className="modal-header bg-light">
    //         <h5 className="modal-title text-primary">Sign In</h5>
    //         <button
    //           type="button"
    //           className="btn-close"
    //           data-bs-dismiss="modal"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div className="modal-body">
    //         <div className="text-center mb-4">
    //           <img src={usericon} className="usericonlogo" alt="Login user" />
    //         </div>
    //         <form onSubmit={proceedLogin}>
    //           <div className="mb-3">
    //             <label htmlFor="exampleInputEmail1" className="form-label">
    //               Email address
    //             </label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="exampleInputEmail1"
    //               aria-describedby="emailHelp"
    //               placeholder="Enter your email address"
    //               value={eml}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //           <div className="mb-3">
    //             <label htmlFor="exampleInputPassword1" className="form-label">
    //               Mobile{" "}
    //             </label>
    //             <input
    //               type="password"
    //               className="form-control"
    //               id="exampleInputPassword1"
    //               placeholder="Enter your Mobile Number"
    //               value={pass}
    //               onChange={(e) => setPass(e.target.value)}
    //             />
    //           </div>
    //           <div className="d-grid gap-2">
    //             <Button type="submit" variant="contained">
    //               <b>Sign In</b>
    //             </Button>
    //           </div>
    //         </form>
    //       </div>
    //       <div className="modal-footer justify-content-between bg-light">
    //         <Link to="/signup">
    //           <Button type="button" variant="contained" data-bs-dismiss="modal">
    //             Sign Up
    //           </Button>
    //         </Link>
    //         <Button type="button" variant="contained" data-bs-dismiss="modal">
    //           Close
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="container mt-3">
      <form onSubmit={proceedLogin}>
        <div className="dataContainerLoginPage">
          <div class="mb-3">
            <div className="text-center mb-4">
              <img src={usericon} className="usericonlogo" alt="Login user" />
            </div>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="text" class="form-control" value={eml} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Password</label>
            <input class="form-control" value={pass} onChange={(e) => setPass(e.target.value)}></input>
          </div>
          <div className="modal-footer justify-content-evenly mt-4">
            <Link to="/signup">
              <Button type="button" variant="contained">
                Sign Up
              </Button>
            </Link>
            <Button type="submit" variant="contained">
              Sign In
            </Button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}
