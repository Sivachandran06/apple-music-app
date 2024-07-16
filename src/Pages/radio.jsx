import React from "react";
import "./Radio.css";
import AppleIcon from "@mui/icons-material/Apple";
import { CssBaseline } from '@mui/material';
import Broadcasters from "../Components/RadioBordCast/Broadcasters";


function Radio(props) {
  return (
    <div className="radio-container">
      <div className="radio-heading">
        <h1>Radio</h1>
      </div>

      <div className="section-container">
        <div className="List-container">
          <ul className="first-radio">
            <li>
              <div className="top-list-container">
                <h3>
                  <AppleIcon />
                  Music 1
                </h3>
                <p>The new music that matters.</p>
              </div>
              <div className="img-container"></div>

              <div className="bottom-list-container">
                <h4 className="titel">SongTitel</h4>
              </div>
            </li>
            <li>
              <div className="top-list-container">
                <h3>
                  <AppleIcon />
                  Music Hits
                </h3>
                <p>Songs you know and love.</p>
              </div>
              <div className="img-container"></div>

              <div className="bottom-list-container">
                <h4 className="titel">SongTitel</h4>
              </div>
            </li>
            <li>
              <div className="top-list-container">
                <h3>
                  <AppleIcon />
                  Music Country
                </h3>
                <p>Where it sounds like home.</p>
              </div>
              <div className="img-container"></div>

              <div className="bottom-list-container">
                <h4 className="titel">SongTitel</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <CssBaseline />
      <Broadcasters/>
    </div>
  );
}

export default Radio;
