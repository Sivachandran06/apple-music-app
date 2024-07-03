import React from "react";
import Box from '@mui/joy/Box';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import SearchBar from "./SearchBar";
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import AppleIcon from '@mui/icons-material/Apple';
import { Button } from "@mui/material";
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import Beta from "./Beta";


function LeftPanel() {

    const Item = styled(Sheet)(({ theme }) => ({
        ...theme.typography['body-sm'],
        textAlign: 'center',
        fontWeight: theme.fontWeight.md,
        color: theme.vars.palette.text.secondary,
        border: '1px solid',
        borderColor: theme.palette.divider,
        padding: theme.spacing(1),
        borderRadius: theme.radius.md,
    }));


    return (
        <>
            {/* */}

            <div className="sidebar">
                <div className="sidenav_button_wrapper">
                    <div className="applelogo">
                        <AppleIcon />
                        <span className="applelogotext">Music</span>
                    </div>
                    <div>
                        <Input startDecorator={<SearchIcon />}
                            placeholder="Search"
                            sx={{
                                '&::before': {
                                    display: 'none',
                                },
                                '&:focus-within': {
                                    outline: '2px solid var(--Input-focusedHighlight)',
                                    outlineOffset: '2px',
                                },
                            }}
                        />
                    </div>
                    <div>
                        <Box sx={{ width: '100%' }}>
                            <Stack spacing={2}>
                                <Item>Home</Item>
                                <Item>Browser</Item>
                                <Item>Radio</Item>
                            </Stack>
                        </Box>
                    </div>
                </div>
                <div>
                    <button className="Open-in-music-btn ">
                        <span><img src='Music.svg' className="open-in-music-svg"></img></span>
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