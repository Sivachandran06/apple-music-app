import React from "react";
import PlayerControls from './HeaderComponent/PlayerControls';
import PlayerDisplay from './HeaderComponent/PlayerDisplay';
import { height } from "@mui/system";
function Header() {
    return (
      <div className='header'>
          <div className="player-controler"><PlayerControls/></div>
          <div className="player-display"><PlayerDisplay Style={{  width:'50', height : '50' }}/></div>
          <div className="player-volume"></div>
          <div className="player-Sign-in"></div>
      </div>
    )
}

export default Header;