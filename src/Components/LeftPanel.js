import React from "react";
import Box from '@mui/joy/Box';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import SearchBar from "./SearchBar";
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import AppleIcon from '@mui/icons-material/Apple';
import { Button, colors } from "@mui/material";
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import Beta from "./Beta";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { red } from "@mui/material/colors";

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
                            <Stack direction="column" spacing={2} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Button variant="none" startIcon={<HomeOutlinedIcon sx={{ color: red[500] }} />}>
                                    Home
                                </Button>
                                <Button variant="none" startIcon={<GridViewOutlinedIcon sx={{ color: red[500] }} />}>
                                    Browser
                                </Button>
                                <Button variant="none" startIcon={<SensorsOutlinedIcon sx={{ color: red[500] }} />}>
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