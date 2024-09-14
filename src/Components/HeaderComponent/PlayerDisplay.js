import React, { useState } from "react";
import AppleIcon from '@mui/icons-material/Apple';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './PlayerDisplayModule.css';

function PlayerDisplay() {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleToggle = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <>
            <div className="player-display">
                <div className="left-icon">
                    <img alt="MusicSyb.svg" src='MusicSyb.svg' style={{ height: "20px", width: "20px" }} />
                </div>
                <div className="player-container">
                    <div className="center-content">
                        <AppleIcon style={{ color: "rgb(104 104 104)", fontSize: "24px" }} />
                    </div>
                </div>
                <div onClick={handleToggle} style={{ cursor: 'pointer' ,color:"rgb(104 104 104)" }}>
                    {isFavorited ? <FavoriteIcon color="error"sx={{ color: "rgb(104 104 104)" }} /> : <FavoriteBorderIcon sx={{ color: "rgb(104 104 104)" }}/>}
                </div>
            </div>
        </>
    );
}

export default PlayerDisplay;
