import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@mui/material';
import React from 'react';

import ArrowDown from '../icon/ArrowDown';
import AvatarFilter from '../Filter/AvatarFilter';
import WeaponFilter from '../Filter/WeaponFilter';
import ArmorFilter from '../Filter/ArmorFilter';
import ClothingFilter from '../Filter/ClothingFilter';

const TypeFilter = () => {
  return (
    <Box>
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
            padding: { xs: '16px', sm: '0px 16px', md: '16px' },
            backgroundColor: '#282828',
            fontSize: { sm: '12px', lg: '30px' },
          }}
        >
          Type
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
            backgroundColor: '#121212;',
            borderBottom: '1px solid #272826',
            borderRight: '1px solid #272826',
          }}
        >
          <AvatarFilter />
          <WeaponFilter />
          <ArmorFilter />
          <ClothingFilter />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TypeFilter;
