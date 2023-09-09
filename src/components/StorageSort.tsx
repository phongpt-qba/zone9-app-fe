import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const StorageSort = () => {
  const [options, setOptions] = useState('');

  const handleChange = (event) => {
    setOptions(event.target.value);
  };
  return (
    <Box sx={{ fontSize: '20px' }}>
      <FormControl
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '15px',
          },
        }}
      >
        <InputLabel sx={{ textAlign: 'center' }} id="demo-simple-select-label">
          Sort
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={options}
          label="Class"
          onChange={handleChange}
          sx={{
            backgroundColor: '#191919',
          }}
        >
          <MenuItem value={1}>Price low to high</MenuItem>
          <MenuItem value={2}>Price high to low</MenuItem>
          <MenuItem value={3}>Recently listed</MenuItem>
          <MenuItem value={4}>Recently created</MenuItem>
          <MenuItem value={5}>Highest last sale</MenuItem>
          <MenuItem value={6}>Most viewed</MenuItem>
          <MenuItem value={7}>Most favorited</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default StorageSort;
