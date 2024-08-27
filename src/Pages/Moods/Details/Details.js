import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const songs = [
  {
    title: "Love on the Line",
    artist: "Warren Zeiders",
    img: "https://path-to-your-image-1.jpg"
  },
  {
    title: "WE PRAY",
    artist: "Coldplay, Little Simz, Burna Boy, Elyanna, TINI",
    img: "https://path-to-your-image-2.jpg"
  },
  {
    title: "Taste",
    artist: "Sabrina Carpenter",
    img: "https://path-to-your-image-3.jpg"
  },
  {
    title: "In the Modern World",
    artist: "Fontaines D.C.",
    img: "https://path-to-your-image-4.jpg"
  },
  {
    title: "AY MAMÁ",
    artist: "Tito Double P, Grupo Frontera",
    img: "https://path-to-your-image-5.jpg"
  },
  {
    title: "Billion Streams Freestyle",
    artist: "Central Cee",
    img: "https://path-to-your-image-6.jpg"
  },
  {
    title: "Whirlwind",
    artist: "Lainey Wilson",
    img: "https://path-to-your-image-7.jpg"
  },
  {
    title: "act like",
    artist: "Cash Cobain",
    img: "https://path-to-your-image-8.jpg"
  },
  {
    title: "Love on the Line",
    artist: "Warren Zeiders",
    img: "https://path-to-your-image-1.jpg"
  },
  {
    title: "WE PRAY",
    artist: "Coldplay, Little Simz, Burna Boy, Elyanna, TINI",
    img: "https://path-to-your-image-2.jpg"
  },
  {
    title: "Taste",
    artist: "Sabrina Carpenter",
    img: "https://path-to-your-image-3.jpg"
  },
  {
    title: "In the Modern World",
    artist: "Fontaines D.C.",
    img: "https://path-to-your-image-4.jpg"
  },
  {
    title: "AY MAMÁ",
    artist: "Tito Double P, Grupo Frontera",
    img: "https://path-to-your-image-5.jpg"
  },
  {
    title: "Billion Streams Freestyle",
    artist: "Central Cee",
    img: "https://path-to-your-image-6.jpg"
  },
  {
    title: "Whirlwind",
    artist: "Lainey Wilson",
    img: "https://path-to-your-image-7.jpg"
  },
  {
    title: "act like",
    artist: "Cash Cobain",
    img: "https://path-to-your-image-8.jpg"
  },
  // Add more songs as needed
];

export default function LatestSongs(song) {
  // Split the songs array into chunks of 4
  const chunkedSongs = [];
  for (let i = 0; i < songs.length; i += 4) {
    chunkedSongs.push(songs.slice(i, i + 4));
  }

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#000', padding: 2,display: 'flex', flexWrap: 'nowrap', }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
        Latest Songs
      </Typography>
      <Grid container spacing={2}>
        {chunkedSongs.map((chunk, index) => (
          <Grid xs={4} key={index}>
            <List sx={{ bgcolor: 'background.paper' }}>
              {chunk.map((song, idx) => (
                <ListItem key={idx}>
                  <ListItemAvatar>
                    <Avatar alt={song.title} src={song.img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={song.title}
                    secondary={
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {song.artist}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
