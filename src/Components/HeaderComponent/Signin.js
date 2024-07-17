import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import AppleIcon from '@mui/icons-material'
import './Login.css';
import CancelIcon from '@mui/icons-material/Cancel';
import { White } from '@mui/material/colors';





export default function Signin() {

  const [isOpen, setIsOpen] = React.useState(false);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <div > 
      <Stack direction="row" spacing={2} >
      <Button variant="outlined"
        startIcon={<PersonIcon />}
        style={{ textTransform: "lowercase", color: "White", backgroundColor: "red", borderRadius: "5px", height: "25px", fontSize: "11.5px"}}
        onClick={togglePopup}>
        Sign in
      </Button>
    </Stack>
    {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={togglePopup} style={{background: "none", background:"#1c1c1e",border: "13px"}}>
             <CancelIcon sx={{ color: "action" ,fontSize:"40px"}}/>
            </button>
            <div className="popup-content">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Logo"
                className="logo"
              />
              <h1>Sign In or Sign Up</h1>
              <p>Enter your email to get started.</p>
              <input
                type="email"
                placeholder="Email or Apple Account"
                required
              />
              <input
                type="Password"
                placeholder="Password"
                required
              />
              <PeopleAltSharpIcon style={{color:"#fa2d48"}}/>
              <p className="info-text">
                Your Apple Account information is used to allow you to sign in
                securely and access your data. Apple records certain data for
                security, support, and reporting purposes. If you agree, Apple
                may also use your Apple Account information to send you
                marketing emails and communications, including based on your use
                of Apple services.{' '}
                <a href="#">See how your data is managed...</a>
              </p>
              <button className="continue-btn">Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
      
  );
}

