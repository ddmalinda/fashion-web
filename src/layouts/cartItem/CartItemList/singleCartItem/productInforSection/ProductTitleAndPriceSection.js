import React from 'react';
import { Box, Typography } from '@mui/material';
import { priceValueFormat } from '../../../../../util/Functions';

export default function ProductTitleAndPriceSection({ ProductName, price }) {
  return (
    <Typography
      sx={{
        fontFamily: 'Ubuntu',
        fontSize: { xs: '17px', sm: '20px', md: '20px', lg: '32px' },
        fontWeight: 'bold',
        color: '#1D1D1D',
      }}
    >
      {ProductName}
      <Box
        component={'span'}
        sx={{
          color: 'black',
          fontWeight: '400',
          ml: {  sm: '20px' }, // Remove margin for xs size
          display: { xs: 'block', sm: 'inline' }, // New line for xs, inline for larger sizes
        }}
      >
        {priceValueFormat(price)}
      </Box>
    </Typography>
  );
}