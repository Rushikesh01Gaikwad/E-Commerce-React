import React from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className='signupcontainer container'>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              type="text"
              id="name"
              value={name}
              label="Enter Name"
              multiline
              maxRows={4}
              variant="standard"
              onChange={(e) => setName(e.target.value)}  
            />
            <TextField
              id="email"
              value={email}
              label="Enter Email"
              multiline
              maxRows={4}
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="mobile"
              value={mobile}
              label="Mobile Number"
              multiline
              maxRows={4}
              variant="standard"
              onChange={(e)=> setMobile(e.target.value)}
            />
            <TextField
              id="address"
              value={address}
              label="Address"
              multiline
              rows={4} // corrected attribute name
              variant="standard"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="city"
              value={city}
              label="City"
              multiline
              maxRows={4}
              variant="standard"
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="state"
              value={state}
              label="State"
              multiline
              maxRows={4}
              variant="standard"
              onChange={(e)=> setState(e.target.value)}
            />
            <TextField
              id="pin"
              value={pin}
              label="Pin code"
              multiline
              maxRows={4}
              variant="standard"
              onChange={(e)=> setPin(e.target.value)}
            />
            <Button variant="contained" size="large" type="submit">
              <b>Submit</b>
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
}
