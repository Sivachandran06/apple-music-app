import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';

export default function Signin() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<PersonIcon />} style={{ textTransform: "lowercase", color: "White", backgroundColor: "red", borderRadius: "5px", height: "25px", fontSize: "11.5px" }}>
        Sign in
      </Button>
    </Stack>
  );
}