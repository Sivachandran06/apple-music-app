import { Typography } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import Stack from "@mui/material/Stack";
import "../Components/component.css";
import { _getApiData } from "../network/util";
import { UserContext } from "../store/userContext";

function Browse(props) {
  const { user, setUser } = useContext(UserContext);
  const [musicList, setMusicList] = useState([]);
  const [songslist, setsongslist] = useState([]);

  async function fetchMusicList() {
    const url = "https://academics.newtonschool.co/api/v1/music/album";
    const requestOptions = {
      method: "GET",
    };
    let data = await _getApiData(url, requestOptions);
    localStorage.setItem("musiclist", JSON.stringify(data.data));
    data = data.data;
    setsongslist(data[3]["songs"]);
    console.log("mksongs", data[0]["songs"]);
    setMusicList(data);
  }

  useEffect(() => {
    fetchMusicList();
  }, []);

  const setAudio = (url) => {
    setUser({ ...user, song_url: url, isPlaying: true });
    user.audioRef.current.play();
  };
  return (
    <>
      <h1>Browse</h1>
      <hr></hr>
      <Stack
        className="scroll_carousel"
        sx={{
          overflowY: "auto",
          "& > *": {
            width: "100%",
          },
        }}
        direction="row"
        spacing={2}
      >
        {musicList.map((element, index) => {
          return (
            <div key={index} className="albumBanner">
              <Typography variant="h6">{element.title}</Typography>
              <Typography variant="body1">
                Artis Name : {element.name}
              </Typography>
              <img
                className="album_image"
                alt="album_cover"
                src={element.image}
              />
            </div>
          );
        })}
      </Stack>

      <Stack
        className="scroll_carousel"
        sx={{
          overflowY: "auto",
          "& > *": {
            width: "100%",
          },
        }}
        direction="row"
        spacing={2}
      >
        {songslist.map((element, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setAudio(element.audio_url);
              }}
              className="albumBanner"
            >
              <Typography variant="h6">{element.title}</Typography>
              <Typography variant="body1">
                Artis Name : {element.name}
              </Typography>
              <img
                className="album_image"
                alt="album_cover"
                src={element.thumbnail}
              />
              <audio src={element.audio_url}></audio>
            </div>
          );
        })}
      </Stack>
    </>
  );
}

export default Browse;
