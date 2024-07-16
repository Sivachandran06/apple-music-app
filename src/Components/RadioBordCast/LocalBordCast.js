import React from 'react';
import { Box, Typography } from '@mui/material';
import BroadcasterCard from './BroadcasterCard';

const localBroadcasters = [
  { image: 'path/to/image1.png', title: 'NPR News and Culture', subtitle: 'Stories that inform, inspire, and entertain.' },
  { image: 'path/to/image2.png', title: '102.7 KIIS-FM Los Angeles', subtitle: 'iHeartRadio' },
  // Add more broadcasters here
];

const LocalBroadcasters = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Local Broadcasters
      </Typography>
      {localBroadcasters.map((broadcaster, index) => (
        <BroadcasterCard key={index} {...broadcaster} />
      ))}
    </Box>
  );
};

export default LocalBroadcasters;