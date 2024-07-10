import React from "react";
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import Beta from "./Beta";
import AppleLogo from "./logo";
import { BrowseGallery, Home, MusicNote } from "@mui/icons-material";
import { Link } from "react-router-dom";

function LeftPanel() {

    return (
        <>
            <div className="sidebar">
                <div className="sidenav_button_wrapper">
                    <AppleLogo />
                    <Stack spacing={1}>
                        <Input size="small" startDecorator={<SearchIcon />} placeholder="Search" />
                        <Button className="nav_btn" size="small" LinkComponent={Link} to="/" startIcon={<Home className="nav_icon" />}>Home</Button>
                        <Button className="nav_btn" size="small" LinkComponent={Link} to="/browse" startIcon={<BrowseGallery className="nav_icon" />}>Browse</Button>
                        <Button className="nav_btn" size="small" LinkComponent={Link} to="/radio" startIcon={<MusicNote className="nav_icon" />}>Radio</Button>
                    </Stack>
                </div>
                <div className="btom-container">
                    <button className="Open-in-music-btn ">
                        <span><img alt="music.svg" src='Music.svg' className="open-in-music-svg"></img></span>
                        <span> Open in Music</span><CallMadeRoundedIcon />
                    </button>
                    <div>
                        <Beta />
                    </div>

                </div>

            </div>
        </>
    )
}
export default LeftPanel;