import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import './Login.css';
import CancelIcon from '@mui/icons-material/Cancel';
import { _getApiData } from "../../network/util";
import { UserContext } from '../../store/userContext';


export default function Signin() {

  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const [loginState, setloginState] = React.useState({
    email: "",
    password: "",
    appType: "music",
  });

  let signIn = async () => {
    let login = await _getApiData("https://academics.newtonschool.co/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: loginState['email'],
        password: loginState['password'],
        appType: 'music'
      })
    });
    if (login['status'] === "error") {
      alert(login['status']);
      sessionStorage.setItem("loggedin", false);
      setUser({ ...user, loggedin: false })
    } else {
      alert(login['status']);
      sessionStorage.setItem("loggedin", true);
      setUser({ ...user, loggedin: true })
      togglePopup();
    }
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const signout = () => {
    sessionStorage.clear();
    setUser({ ...user, loggedin: false })
  }


  return (
    <div >
      <Stack direction="row" spacing={2} >
        {!user.loggedin ? <Button variant="outlined"
          startIcon={<PersonIcon />}
          style={{ textTransform: "lowercase", color: "White", backgroundColor: "red", borderRadius: "5px", height: "25px", fontSize: "11.5px" }}
          onClick={togglePopup}>
          Sign in
        </Button> : <Button variant="outlined"
          startIcon={<PersonIcon />}
          style={{ textTransform: "lowercase", color: "White", backgroundColor: "red", borderRadius: "5px", height: "25px", fontSize: "11.5px" }}
          onClick={signout}>
          Sign out
        </Button>}
      </Stack>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={togglePopup} style={{ background: "#1c1c1e", border: "13px" }}>
              <CancelIcon sx={{ color: "action", fontSize: "40px" }} />
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
                onChange={(e) => setloginState({ ...loginState, "email": e.target.value })}
              />
              <input
                type="Password"
                placeholder="Password"
                required
                onChange={(e) => setloginState({ ...loginState, "password": e.target.value })}
              />
              <PeopleAltSharpIcon style={{ color: "#fa2d48" }} />
              <p className="info-text">
                Your Apple Account information is used to allow you to sign in
                securely and access your data. Apple records certain data for
                security, support, and reporting purposes. If you agree, Apple
                may also use your Apple Account information to send you
                marketing emails and communications, including based on your use
                of Apple services.{' '}
                <a href="/">See how your data is managed...</a>
              </p>
              <button className="continue-btn" onClick={signIn}>Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

