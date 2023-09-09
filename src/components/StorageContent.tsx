import { Box } from '@mui/material';
import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import StorageSort from './StorageSort';

const StorageContent = () => {
  return (
    <Box
      sx={{
        display: { sm: 'flex' },
        gap: { xs: '20px', sm: '50px' },
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{ width: { sm: '80%' }, paddingBottom: { xs: '20px', sm: '0px' } }}
      >
        <SearchBar />
      </Box>
      <Box sx={{ width: { sm: '20%' } }}>
        <StorageSort />
      </Box>
    </Box>
  );
};

export default StorageContent;
