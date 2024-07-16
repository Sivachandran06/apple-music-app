import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const BroadcasterCard = ({ image, title, subtitle }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 80 }}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BroadcasterCard;