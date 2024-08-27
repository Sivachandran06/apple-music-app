import React, { useContext, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { UserContext } from "../../store/userContext";





function NewReleases() {
    const { user, setUser } = useContext(UserContext);
    const [musicList,setMusiclist]= useState([]);


    useEffect(() => {


        fetch('https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}&limit=100', {
            headers: {
                "projectId": "u0kdju5bps0g",
            },
        })
            .then((response) => response.json())
            .then((result) => setMusiclist(result.data, "Siva results"))
            .catch((error) => console.error(error));
    }, []);

    const setAudio = (url) => {
        setUser({ ...user, song_url: url, isPlaying: true });
        user.audioRef.current.play();
      };

    return (
        <><h1>NewReleases Songs</h1>
            <Stack
                className="scroll_carousel"
                sx={{
                    overflowY: "auto",
                    "& > *": {
                        height: "50%",
                        width: "50%",
                    },
                }}
                direction="row"
                spacing={2}
            >
                {musicList.map((element, index) => {
                    return (
                        <div key={index}
                            onClick={() => {
                                setAudio(element.audio_url);
                            }} className="albumBanner">
                            <img
                                className="album_image"
                                alt="album_cover"
                                src={element.image}
                            />
                            <Typography variant="h6" sx={{ overflow: "hidden" }}>{element.title}</Typography>
                            <audio src={element.audio_url}></audio>
                        </div>
                    );
                })}
            </Stack>

        </>
    )
}
export default NewReleases;