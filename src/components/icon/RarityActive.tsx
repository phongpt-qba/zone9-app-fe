import { Box } from '@mui/material';
import React from 'react';

const RarityActive = () => {
  return (
    <Box>
      <Box sx={{ display: { xs: 'block', sm: 'none', lg: 'block' } }}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="12.7285"
            width="18"
            height="18"
            transform="rotate(45 12.7285 0)"
            fill="#D9D9D9"
          />
        </svg>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block', lg: 'none' } }}>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.23438"
            width="7.40197"
            height="7.40197"
            transform="rotate(45 5.23438 0)"
            fill="#D9D9D9"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default RarityActive;
