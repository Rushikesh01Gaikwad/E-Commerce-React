import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useState } from 'react';
import doneGif from '../DoneMassage.gif';

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
      // Optionally, you can redirect or show a success message here
    } catch (error) {
      console.error('Error adding post:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <div className='signupcontainer container'>
        <form onSubmit={handleSubmit}>

          <div className='signupInput'>
            <div class="mb-3 sizeadjustdivmaincard mt-2">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="mb-3 sizeadjustdivmaincard mt-2" style={{ marginLeft: "1vw" }}>
              <label for="mobile" class="form-label">Mobile Number</label>
              <input type="text" class="form-control" id="mobile" onChange={(e) => setMobile(e.target.value)} />
            </div>
          </div>
          <div className='signupInput'>
            <div class="mb-3 sizeadjustdivmaincard">
              <label for="email" class="form-label">Email address</label>
              <input type="text" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="mb-3 sizeadjustdivmaincard" style={{ marginLeft: "1vw" }}>
              <label for="city" class="form-label">City</label>
              <input type="text" class="form-control" id="city" onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea class="form-control" id="address" rows="3" onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>
          <div className='signupInput'>
            <div class="mb-3 sizeadjustdivmaincard">
              <label for="state" class="form-label">State</label>
              <input type="text" class="form-control" id="state" onChange={(e) => setState(e.target.value)} />
            </div>
            <div class="mb-3 sizeadjustdivmaincard" style={{ marginLeft: "1vw" }}>
              <label for="pin" class="form-label">Pin Code</label>
              <input type="text" class="form-control" id="pin" onChange={(e) => setPin(e.target.value)} />
            </div>
          </div>
          <Button variant="contained" size="large" type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <b>Submit</b>
          </Button>
        </form>
      </div>
      
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">User Added Successfully</h1>
            </div>
            <div class="modal-body">
              <img src={doneGif} alt='done_img' width="465"/>
            </div>
            <div class="modal-footer">
              <Button variant="contained" size="large" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdropsignin"><b>Login</b></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
