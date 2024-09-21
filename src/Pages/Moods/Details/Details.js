import React, { useContext } from 'react';
import { UserContext } from "../../../store/userContext"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function AlignItemsList({ musicList }) {
  const { user, setUser } = useContext(UserContext);

  const setAudio = (song) => {
    setUser({ ...user, song_url: song.audio_url, isPlaying: true, songLikedBy: song.likedBy, songDetails: song });
    setTimeout(() => {
      user.audioRef.current.play()
    }, 1000);;
  };

  console.log("musilist", musicList);
  if (!musicList || !Array.isArray(musicList)) {
    console.error("Invalid or undefined musicList:", musicList);
    return null;
  }
  // const songs = musicList.songs || [];
  // console.log(songs , "Songs");


  return (
    <>
      <h2 style={{ color: "hsl(0deg 0% 93.73%)", display: "flex" }} >Latest Songs</h2>
      <Box sx={{ flexGrow: 1, backgroundColor: '#333333', padding: 2, display: 'flex', flexWrap: 'nowrap' }} >
        <Grid container spacing={0} >
          {musicList.map((song, index) => (
            <Grid xs={4} key={song._id}>
              <List sx={{ bgcolor: 'none' }}>
                <ListItem onClick={() => {
                  setAudio(song);
                }}>
                  <ListItemAvatar>
                    <Avatar alt={song.title} src={song.thumbnail} />
                  </ListItemAvatar>
                  <ListItemText sx={{ color: "hsl(0deg 0% 93.73%)" }}
                    primary={song.title}
                    secondary={
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                      >
                        {song.mood}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>

  );
}
