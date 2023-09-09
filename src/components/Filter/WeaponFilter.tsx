import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useState } from 'react';

import ArrowDown from '../icon/ArrowDown';

const WeaponFilter = () => {
  const [options, setOptions] = useState('');

  const handleChange = (event) => {
    setOptions(event.target.value);
  };
  return (
    <Accordion disableGutters={true}>
      <AccordionSummary
        expandIcon={<ArrowDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          width: '100%',
          padding: '16px',
          backgroundColor: '#121212',
          '&    .MuiAccordionSummary-content': {
            margin: 0,
          },
          '&    .MuiAccordionSummary-root': {
            margin: 0,
            borderBottom: '1px solid #272826',
          },
        }}
      >
        <Box sx={{ fontSize: { sm: '7px', lg: '16px', xl: '20px' } }}>
          Weapon
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '7px', backgroundColor: '#121212' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={options}
            label="Class"
            onChange={handleChange}
            sx={{ backgroundColor: '#191919' }}
          >
            <MenuItem value={1}>Pistol</MenuItem>
            <MenuItem value={2}>Machine Gun</MenuItem>
            <MenuItem value={3}>Rifle</MenuItem>
            <MenuItem value={4}>Shotgun</MenuItem>
            <MenuItem value={5}>Melee</MenuItem>
            <MenuItem value={6}>All</MenuItem>
          </Select>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default WeaponFilter;
