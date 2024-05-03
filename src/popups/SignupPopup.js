import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <div className='signupcontainer container'>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 4, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Enter Name"
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Enter Email"
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Mobile Number"
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Address"
            multiline
            Rows={4}
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="City"
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            id="standard-multiline-flexible"
            label="State"
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Pin code"
            multiline
            maxRows={4}
            variant="standard"
          />
        </div>
      </Box>
    </div>
  );
}
