import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@mui/material';
import React from 'react';

import RarityItems from './RarityItems';
import ArrowDown from '../icon/ArrowDown';

const RarityFilter = () => {
  const rarityItems = [
    {
      id: 0,
      name: 'Common',
    },
    {
      id: 1,
      name: 'Uncommon',
    },
    {
      id: 2,
      name: 'Rare',
    },
    {
      id: 3,
      name: 'Epic',
    },
    {
      id: 4,
      name: 'Legendary',
    },
  ];
  return (
    <Box>
      <Accordion>
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
          Rarity
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
            backgroundColor: '#121212;',
          }}
        >
          {rarityItems.map((rarityItem) => (
            <RarityItems key={rarityItem.id} rarityItem={rarityItem} />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default RarityFilter;
