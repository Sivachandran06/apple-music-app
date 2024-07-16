// Broadcasters.js
import React from 'react';
import { Box } from '@mui/material';
import LocalBroadcasters from './LocalBordCast';
import InternationalBroadcasters from './internationalBroadcasters ';

const Broadcasters = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <LocalBroadcasters />
      <InternationalBroadcasters />
    </Box>
  );
};

export default Broadcasters;
