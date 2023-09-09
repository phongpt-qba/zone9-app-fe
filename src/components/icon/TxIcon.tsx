import { Box } from '@mui/material';
import React from 'react';

const TxIcon = () => {
  return (
    <Box>
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <svg
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0H2C0.9 0 0 0.859091 0 1.90909V15.2727H2V1.90909H14V0ZM17 3.81818H6C4.9 3.81818 4 4.67727 4 5.72727V19.0909C4 20.1409 4.9 21 6 21H17C18.1 21 19 20.1409 19 19.0909V5.72727C19 4.67727 18.1 3.81818 17 3.81818ZM17 19.0909H6V5.72727H17V19.0909Z"
            fill="#9A9A9A"
          />
        </svg>
      </Box>
      <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.66041 0.383789H1.06833C0.647385 0.383789 0.302979 0.71254 0.302979 1.11435V6.22826H1.06833V1.11435H5.66041V0.383789ZM6.80843 1.84491H2.59902C2.17808 1.84491 1.83367 2.17366 1.83367 2.57546V7.68937C1.83367 8.09118 2.17808 8.41993 2.59902 8.41993H6.80843C7.22937 8.41993 7.57378 8.09118 7.57378 7.68937V2.57546C7.57378 2.17366 7.22937 1.84491 6.80843 1.84491ZM6.80843 7.68937H2.59902V2.57546H6.80843V7.68937Z"
            fill="#9A9A9A"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default TxIcon;
