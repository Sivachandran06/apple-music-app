import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';

export default function Signin() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<PersonIcon />} style={{color:"White", backgroundColor:"red", borderRadius:"5px"}}>
        Sign in
      </Button>
    </Stack>
  );
}