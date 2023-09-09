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

const ClassFilter = () => {
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
          '&	.MuiAccordionSummary-content': { margin: 0 },
        }}
      >
        <Box sx={{ fontSize: { sm: '7px', lg: '16px', xl: '20px' } }}>
          Class
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
            <MenuItem value={1}>Soldier</MenuItem>
            <MenuItem value={2}>Athelete</MenuItem>
            <MenuItem value={3}>Hunter</MenuItem>
            <MenuItem value={4}>Police</MenuItem>
            <MenuItem value={5}>Engineer</MenuItem>
            <MenuItem value={6}>Mechanic</MenuItem>
            <MenuItem value={7}>Doctor</MenuItem>
            <MenuItem value={8}>Scientist</MenuItem>
            <MenuItem value={9}>Chef</MenuItem>
            <MenuItem value={10}>All</MenuItem>
          </Select>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default ClassFilter;
