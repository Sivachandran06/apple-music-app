import React, { useEffect, useState } from "react";
import MusicList from "../Components/MusicList";
import AppleLogo from "../Components/logo";
import { Button, Stack } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Home1() {
    const [musicList, setMusicList] = useState([]);

    useEffect(() => {
        const url = "https://academics.newtonschool.co/api/v1/music/album";

        const myHeaders = new Headers();
        myHeaders.append("projectId", "22uq494gh842");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        async function fetchMusicList() {
            const response = await fetch(url, requestOptions);
            const result = await response.json();
            setMusicList(result.data); // Save data to state
            console.log(result.data, "data");
        }

        fetchMusicList();
    }, []);

    return (
        <>
            <div className="MainContainerSection">
                <div className="BrowserBanner">
                    <section>
                        {musicList.map((music) => {
                            const { title, _id, audio_url,
                                description } = music;
                            {
                                /* TODO: music card */
                            }
                            return (

                                <div
                                    onClick={() => setMusicList({
                                        title,
                                        _id,
                                        audio_url

                                    })}>
                                    {title} - {_id}- {description} -{audio_url}
                                    <MusicList songs={music.songs} title={"SMART SIVA"} />
                                </div>
                            );
                        })}
                    </section>


                </div>
            </div>
        </>
    );
}
function Home() {
    return (
        <div>
            <AppleLogo />
            <p>
                Discover New Music Everyday.
            </p>
            <p>Get playlists and albums inspired by the artists and genres you’re listening to. 1 month free, then $10.99/month.</p>
            <Stack direction="row" spacing={2} alignContent={"center"} justifyContent={"center"}>
                <Button variant="outlined" style={{ color: "White", backgroundColor: "red" }}>
                    Try it Free
                </Button>
            </Stack>
            <Button variant="text">Learn More <KeyboardArrowRightIcon /></Button>
        </div>
    )
}

export default Home;
