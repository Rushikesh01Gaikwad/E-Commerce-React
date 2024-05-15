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
      fetch(`http://localhost:3000/Data?email=${encodeURIComponent(eml)}&password=${encodeURIComponent(pass)}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((resp) => {
          console.log('Response from server:', resp);
          if (Object.keys(resp).length === 0) {
            console.log('Invalid email or password');
          } else {
            console.log('User found. Checking password...');
            if (resp.email === eml && resp.pass === pass) {
              console.log('Login successful');
              // Redirect user to homepage or perform other actions
            } else {
              console.log('Invalid email or password');
            }
          }
        })
        .catch((err) => {
          console.error('Error during login:', err);
          console.log('Login failed. Please try again later.');
        });
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
