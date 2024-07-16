import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { DialogActions, TextField } from '@mui/material';
import AppleIcon from "@mui/icons-material/Apple";





export default function Signin() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div > 
      <Stack direction="row" spacing={2} >
      <Button variant="outlined"
        startIcon={<PersonIcon />}
        style={{ textTransform: "lowercase", color: "White", backgroundColor: "red", borderRadius: "5px", height: "25px", fontSize: "11.5px"}}
        onClick={handleClickOpen}>
        Sign in
      </Button>
    </Stack>
    <div>
    <Dialog open={open} onclose={handleClickOpen}>
        <Button onClick={handleClose}sx={{color:"#aeaead", display:"flex",placeself: "flex-start", backgroundColor:"#333336",borderradius: "50%",padding: "19px",fontWeight:"bold" }}> X </Button>

        <div style={{ display: "flex", alignItems:"center", flexDirection:'column'}}>
          <AppleIcon sx={{fontSize:'60px' ,color:"#6e6e73"}}/>
          <DialogTitle >Sign In or Sign Up</DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom>
              Enter your email to get started.
            </Typography>
          </DialogContent>
        </div>
        <div style={{gap:"20px"}}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email or Apple Account"
              type="email"
              fullWidth
              variant="outlined"

            />
            <Typography variant="body2" gutterBottom>
              Your Apple Account information is used to allow you to sign in securely and access your data.
              Apple records certain data for security, support, and reporting purposes. If you agree, Apple
              may also use your Apple Account information to send you marketing emails and communications,
              including based on your use of Apple services.
            </Typography>
            <Button variant="text" >
              See how your data is managed.
            </Button>
          </DialogContent>
        </div>

        <DialogActions>
          <Button onClick={handleClose} >
            Continue
          </Button>
        </DialogActions>
      </Dialog >
    </div>
    </div>
      
  );
}