import React from 'react';
import { Box, Typography } from '@mui/material';
import BroadcasterCard from './BroadcasterCard';

const internationalBroadcasters = [
  { image: 'path/to/image1.png', title: 'BBC Radio 1', subtitle: 'TuneIn' },
  { image: 'path/to/image2.png', title: 'Smooth FM 95.3', subtitle: 'TuneIn' },
  // Add more broadcasters here
];

const InternationalBroadcasters = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        International Broadcasters
      </Typography>
      {internationalBroadcasters.map((broadcaster, index) => (
        <BroadcasterCard key={index} {...broadcaster} />
      ))}
    </Box>
  );
};

export default InternationalBroadcasters;