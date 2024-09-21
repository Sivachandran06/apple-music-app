import React, { useState, useContext, useEffect } from "react";
import AppleIcon from '@mui/icons-material/Apple';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './PlayerDisplayModule.css';
import { UserContext } from "../../store/userContext";
import { _getApiData } from "../../network/util";

function PlayerDisplay() {
    const { user, setUser } = useContext(UserContext);
    const [isFavorited, setIsFavorited] = useState(false);

    const handleToggle = () => {
        console.log(user);
        let songid = user.songDetails._id
        setIsFavorited(!isFavorited);
        _getApiData("https://academics.newtonschool.co/api/v1/music/favorites/like", {
            method: "PATCH",
            body: JSON.stringify({ "songId": songid })
        }).then((res) => {
            if (res.status === "success") {
                alert(res.message);
            }
        }).catch((err) => console.log(err))
    };

    const fetchFavorites = async () => {
        let favorites = await _getApiData("https://academics.newtonschool.co/api/v1/music/favorites/like", {
            "method": "GET",
        })
        if (favorites.status === "success") {
            setUser({ ...user, songs_likes: favorites.data.songs })
        }
    }

    useEffect(() => {
        setIsFavorited(user.songs_likes?.some(song => song._id === user.songDetails?._id));
    }, [user, setIsFavorited])

    useEffect(() => {
        fetchFavorites();
    }, [])

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
                <div onClick={handleToggle} style={{ cursor: 'pointer', color: "rgb(104 104 104)", marginLeft: 5 }}>
                    {isFavorited ? <FavoriteIcon color="error" sx={{ color: "rgb(104 104 104)" }} /> : <FavoriteBorderIcon sx={{ color: "rgb(104 104 104)" }} />}
                </div>
            </div>
        </>
    );
}

export default PlayerDisplay;
