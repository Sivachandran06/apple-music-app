import React from "react";
import AppleIcon from '@mui/icons-material/Apple';
import './PlayerDisplayModule.css'

function PlayerDisplay(){
    

    return(

        // Apple Logo
        <>
        <div className="player-display">
            <div className="left-icon">
            <img src='MusicSyb.svg' style={{ height:"20px", width:"20px"}}></img>
            </div>
            <div className="player-container">
            <div className="center-content">
            <AppleIcon style={{ fontSize:"24px" }}/>
            </div>
            </div>
            
        </div>
        </>
    )
}
export default PlayerDisplay;