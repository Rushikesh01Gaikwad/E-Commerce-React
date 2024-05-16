import React, { useEffect, useState } from "react";
import usericon from "../Images/icons/usericon.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInPopup() {
  const [eml, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [notifi, setnotify] = useState("");

  useEffect(()=>{
    sessionStorage.clear();
  },[]);
  
  const usenavigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch(`http://localhost:3000/Data?email=${eml}`)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log('Response from server:', resp);
          if (Object.keys(resp).length === 0) {
            console.log('Enter valid Email');
            setnotify("Enter Valid Email");
          } else {
            console.log('User found. Checking password...');
            if (resp[0].pass === pass) {
              console.log('Login successful');
              sessionStorage.setItem('name', resp[0].name)
              sessionStorage.setItem('email', resp[0].email)
              sessionStorage.setItem('mobile', resp[0].mobile)
              sessionStorage.setItem('address', resp[0].address)
              sessionStorage.setItem('city', resp[0].city)
              sessionStorage.setItem('state', resp[0].state)
              sessionStorage.setItem('pin', resp[0].pin)
              // Redirect user to homepage or perform other actions
              usenavigate('/')
              window.location.reload();
            } else {
              console.log('Enter valid Password');
              setnotify("Enter Valid Password")
            }
          }
        })
        .catch((err) => {
          console.error('Error during login:', err);
          setnotify("Error while Login")
        });
    }
  };
  
  
  const validate = () => {
    let result = true;
    if (eml === "" || eml === null) {
      result = false;
      console.log("enter the username");
      setnotify("Enter the Email");
    }
    if (pass === "" || pass === null) {
      result = false;
      console.log("enter the password");
      setnotify("Enter the Password")
    }
    return result
  };

  const notify = () => {
    toast.success(`${notifi}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
            <input type="password" class="form-control" value={pass} onChange={(e) => setPass(e.target.value)}></input>
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
      <ToastContainer />
    </div>
  );
}
