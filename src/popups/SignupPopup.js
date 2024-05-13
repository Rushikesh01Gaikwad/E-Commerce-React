import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MultilineTextFields() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/Data', {
        name,
        email,
        mobile,
        address,
        city,
        state,
        pin
      });

      console.log('Post added:', response.data);
      notify(); // Notify success
      resetForm(); // Reset form fields

    } catch (error) {
      console.error('Error adding post:', error);
      // Handle error, show error message, etc.
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMobile('');
    setAddress('');
    setCity('');
    setState('');
    setPin('');
  };

  const notify = () => {
    toast.success("User added successfully", {
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
      <div className='signupcontainer container'>
        <form onSubmit={handleSubmit}>

          <div className='signupInput'>
            <div class="mb-3 sizeadjustdivmaincard mt-2">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="mb-3 sizeadjustdivmaincard mt-2" style={{ marginLeft: "1vw" }}>
              <label for="mobile" class="form-label">Mobile Number</label>
              <input type="text" class="form-control" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
          </div>
          <div className='signupInput'>
            <div class="mb-3 sizeadjustdivmaincard">
              <label for="email" class="form-label">Email address</label>
              <input type="text" class="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="mb-3 sizeadjustdivmaincard" style={{ marginLeft: "1vw" }}>
              <label for="city" class="form-label">City</label>
              <input type="text" class="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea class="form-control" id="address" rows="3" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>
          <div className='signupInput'>
            <div class="mb-3 sizeadjustdivmaincard">
              <label for="state" class="form-label">State</label>
              <input type="text" class="form-control" id="state" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <div class="mb-3 sizeadjustdivmaincard" style={{ marginLeft: "1vw" }}>
              <label for="pin" class="form-label">Pin Code</label>
              <input type="text" class="form-control" id="pin" value={pin} onChange={(e) => setPin(e.target.value)} />
            </div>
          </div>
          <Button variant="contained" size="large" type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdropsignin">
            <b>Submit</b>
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
