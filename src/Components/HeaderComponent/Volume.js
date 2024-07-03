import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { rgbToHex } from '@mui/material';
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';

export default function Volume() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      <VolumeUp style={{color: 'black'}} />
        <Slider aria-label="Volume" value={value} onChange={handleChange} style={{color: 'black'}}/> 
      </Stack>
    </Box>
  );
}