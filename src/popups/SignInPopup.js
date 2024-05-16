import React, { useEffect, useState } from "react";
import usericon from "../Images/icons/usericon.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInPopup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const navigate = useNavigate();

  const proceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(`http://localhost:3000/Data?email=${email}`);
        const user = await response.json();
        if (!user || !user.length) {
          setNotification("User not found. Enter valid email.");
        } else if (user[0].pass === password) {
          sessionStorage.setItem('name', user[0].name);
          sessionStorage.setItem('email', user[0].email)
          sessionStorage.setItem('mobile', user[0].mobile)
          sessionStorage.setItem('address', user[0].address)
          sessionStorage.setItem('city', user[0].city)
          sessionStorage.setItem('state', user[0].state)
          sessionStorage.setItem('pin', user[0].pin)
          // Other sessionStorage settings...
          navigate('/');
          window.location.reload();
        } else {
          setNotification("Invalid password. Please try again.");
        }
      } catch (error) {
        console.error('Error during login:', error);
        setNotification("Error while login. Please try again.");
      }
    }
  };

  const validate = () => {
    if (!email.trim()) {
      setNotification("Enter the Email.");
      return false;
    }
    if (!password.trim()) {
      setNotification("Enter the Password.");
      return false;
    }
    return true;
  };

  const notify = () => {
    toast.success(notification, {
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

  useEffect(() => {
    if (notification) {
      notify();
    }
  }, [notification]);

  return (
    <div className="container mt-3">
      <form onSubmit={proceedLogin}>
        <div className="dataContainerLoginPage">
          <div className="mb-3">
            <div className="text-center mb-4">
              <img src={usericon} className="usericonlogo" alt="Login user" />
            </div>
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="modal-footer justify-content-evenly mt-4">
            <Link to="/signup">
              <Button type="button" variant="contained">Sign Up</Button>
            </Link>
            <Button type="submit" variant="contained">Sign In</Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
