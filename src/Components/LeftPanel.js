import React from "react";
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import AppleIcon from '@mui/icons-material/Apple';
import { Button } from "@mui/material";
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import Beta from "./Beta";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

function LeftPanel() {

    return (
        <>
            <div>
                <div className="sidenav_button_wrapper">
                    <div className="applelogo" style={{ textAlign: 'left', padding: '10px' }}>
                        <AppleIcon style={{ color: "#fff" }} />
                        <span className="applelogotext">Music</span>
                    </div>
                    <div >
                        <Input style={{ color: "rgb(176 176 177)", border: "1px solid white" }} startDecorator={<SearchIcon />}
                            placeholder="Search"
                            sx={{
                                '&::before': {
                                    display: 'none',
                                },
                                '&:focus-within': {
                                    outline: '2px solid var(--Input-focusedHighlight)',
                                    outlineOffset: '2px',
                                },
                                backgroundColor: 'transparent'
                            }}
                        />
                    </div>
                    <div className="options-btn">
                        <Box sx={{ width: '100%' }}>
                            <Stack direction="column" spacing={2}>
                                <Button className="nav_btn" size="small" LinkComponent={Link} to="/" variant="none" startIcon={<HomeOutlinedIcon sx={{ color: red[500] }} />}>
                                    Home
                                </Button>
                                <Button className="nav_btn" size="small" LinkComponent={Link} to="/browse1" variant="none" startIcon={<GridViewOutlinedIcon sx={{ color: red[500] }} />}>
                                    Browser
                                </Button>
                                <Button className="nav_btn" size="small" LinkComponent={Link} to="/browse" variant="none" startIcon={<SensorsOutlinedIcon sx={{ color: red[500] }} />}>
                                    browse
                                </Button>
                                <Button className="nav_btn" size="small" LinkComponent={Link} to="/radio" variant="none" startIcon={<SensorsOutlinedIcon sx={{ color: red[500] }} />}>
                                    Radio
                                </Button>
                            </Stack>
                        </Box>
                    </div>
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