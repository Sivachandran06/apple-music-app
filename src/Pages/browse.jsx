import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import "../Components/component.css";


function Browse(props) {
    const [musicList, setMusicList] = useState([]);

    async function fetchMusicList() {
        let data = localStorage.getItem('musiclist')
        if (data) {
            data = JSON.parse(data)
        } else {
            const url = "https://academics.newtonschool.co/api/v1/music/album";
            const myHeaders = new Headers();
            myHeaders.append("projectId", "22uq494gh842");
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(url, requestOptions);
            const result = await response.json();
            data = result.data
            localStorage.setItem("musiclist", JSON.stringify(result.data))
        }
        setMusicList(data); // Save data to state
        console.log(data, "data");
    }

    useEffect(() => {
        fetchMusicList();
    }, []);
    return (
        <>
            <h1>Browse</h1>
            <hr></hr>
            <Stack className="scroll_carousel" sx={{
                overflowY: 'auto',
                maxHeight: 400,
                '& > *': {
                    width: '100%',
                },
            }} direction="row" spacing={2}>
                {musicList.map((element, index) => {
                    return (
                        <div className="albumBanner">
                            <Typography variant="h6">Card</Typography>
                            <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
                            <img className="album_image" alt="album_cover" src={element.image} />
                        </div>
                    )
                })}
            </Stack>
        </>
    )
}


export default Browse;