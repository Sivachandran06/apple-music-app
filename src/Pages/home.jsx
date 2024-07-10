import React, { useEffect, useState } from "react";
import MusicList from "../Components/MusicList";
import AppleLogo from "../Components/logo";
import { Button, Stack } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Home(props) {
    return (
        <div>
            <AppleLogo />
            <p style={{ fontSize: 40 }}>
                Discover New Music Everyday.
            </p>
            <p className="line2">Get playlists and albums inspired by the artists and genres you’re listening to. 1 month free, then $10.99/month.</p>
            <Stack direction="row" spacing={2} alignContent={"center"} justifyContent={"center"}>
                <Button size="small" variant="outlined" style={{ color: "White", backgroundColor: "red" }}>
                    Try it Free
                </Button>
                <Button size="small" variant="text">Learn More <KeyboardArrowRightIcon /></Button>
            </Stack>
            <img src="apple_lap.webp" />
        </div>
    )
}

export default Home;
