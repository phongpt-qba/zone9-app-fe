import React, { useState } from 'react';

import { Container, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Container disableGutters>
      <TextField
        type="search"
        id="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': { borderRadius: '300px' },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default SearchBar;
