import { Box, Button } from '@mui/material';
import React from 'react';

import RarityActive from '../icon/RarityActive';
import RarityUnactive from '../icon/RarityUnactive';
import { useToggle } from 'ahooks';

const RarityItems = ({ rarityItem }) => {
  const [isActive, { toggle }] = useToggle(false);

  return (
    <Button
      onClick={toggle}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        width: '100%',
        padding: '16px',
        borderBottom: '1px solid #272826',
        borderRight: '1px solid #272826',
        fontSize: { sm: '7px', lg: '16px', xl: '20px' },
      }}
    >
      <Box>{rarityItem.name}</Box>
      <Box>
        {isActive && <RarityActive />}
        {!isActive && <RarityUnactive />}
      </Box>
    </Button>
  );
};

export default RarityItems;
