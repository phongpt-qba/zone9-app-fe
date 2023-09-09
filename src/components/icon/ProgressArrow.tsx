import { Box } from '@mui/material';
import React from 'react';

const ProgressArrow = () => {
  return (
    <Box>
      <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.9697 0H4.24242L7.27273 4.99348L4.24242 9.98696H6.9697L10 4.99348L6.9697 0Z"
            fill="#9A9A9A"
          />
          <path
            d="M2.72727 0H0L3.0303 4.99348L0 9.98696H2.72727L5.75758 4.99348L2.72727 0Z"
            fill="#9A9A9A"
          />
        </svg>
      </Box>
      <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
        <svg
          width="5"
          height="6"
          viewBox="0 0 5 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.39753 0.352539H2.11411L3.54014 2.70241L2.11411 5.05229H3.39753L4.82356 2.70241L3.39753 0.352539Z"
            fill="#9A9A9A"
          />
          <path
            d="M1.4011 0.352539H0.117676L1.5437 2.70241L0.117676 5.05229H1.4011L2.82712 2.70241L1.4011 0.352539Z"
            fill="#9A9A9A"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default ProgressArrow;
