import React from "react";
import PlayerControls from './HeaderComponent/PlayerControls';
import PlayerDisplay from './HeaderComponent/PlayerDisplay';
import Volume from "./HeaderComponent/Volume";
import Menu from "./HeaderComponent/Menu";
import Signin from "./HeaderComponent/Signin";
function Header() {
    return (
      <div className='header'>
          <div className="player-controler"><PlayerControls/></div>
          <div className="player-display"><PlayerDisplay Style={{  width:'50', height : '50' }}/></div>
          <div className="player-volume"><Volume/></div>
          <div className="player-menu"><Menu/></div>
          <div className="player-Sign-in"><Signin/></div>
      </div>
    )
}

export default Header;