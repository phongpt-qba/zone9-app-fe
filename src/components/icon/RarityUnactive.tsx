import { Box } from '@mui/material';
import React from 'react';

const RarityUnactive = () => {
  return (
    <Box>
      <Box sx={{ display: { xs: 'flex', sm: 'none', lg: 'flex' } }}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="12.7285"
            y="0.707107"
            width="17"
            height="17"
            transform="rotate(45 12.7285 0.707107)"
            stroke="#D9D9D9"
          />
        </svg>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'flex', lg: 'none' } }}>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.23438"
            y="0.353553"
            width="6.90197"
            height="6.90197"
            transform="rotate(45 5.23438 0.353553)"
            stroke="#D9D9D9"
            stroke-width="0.5"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default RarityUnactive;
