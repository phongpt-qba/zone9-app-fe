import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import TxIcon from '../../icon/TxIcon';

const MintContentItems = ({ mintContentItem }) => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#282828',
    },
  }));
  return (
    <StyledTableRow>
      <TableCell
        align="center"
        component="th"
        scope="row"
        sx={{
          color: '#9A9A9A',
          fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
          '&.MuiTableCell-root': {
            padding: { xs: '0px', sm: '5px', md: '10px', lg: '24px' },
          },
        }}
      >
        {mintContentItem.index}
      </TableCell>
      <TableCell
        align="center"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: '5px', sm: '10px' },
          justifyContent: 'center',
          '&.MuiTableCell-root': {
            padding: { xs: '0px', sm: '5px', md: '10px', lg: '24px' },
          },
        }}
      >
        <Box sx={{ width: { xs: '12px', lg: '32px' }, alignSelf: 'end' }}>
          <img src={mintContentItem.icon} />
        </Box>
        <Box
          sx={{
            color: '#9A9A9A',
            fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
          }}
        >
          {mintContentItem.type}
        </Box>
      </TableCell>
      <TableCell
        sx={{
          color: '#9A9A9A',
          fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
          '&.MuiTableCell-root': {
            padding: { xs: '0px', sm: '5px', md: '10px', lg: '24px' },
          },
        }}
        align="center"
      >
        {mintContentItem.rarity}
      </TableCell>
      <TableCell
        sx={{ '&.MuiTableCell-root': { padding: { xs: '0px', lg: '24px' } } }}
        align="center"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '5px', sm: '15px' },
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              color: '#9A9A9A',
              fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
            }}
          >
            {mintContentItem.tx}
          </Box>
          <Box sx={{ alignSelf: 'end' }}>
            <TxIcon />
          </Box>
        </Box>
      </TableCell>
      <TableCell
        align="center"
        sx={{
          color: '#D56F4D',
          fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
          '&.MuiTableCell-root': {
            padding: { xs: '0px', sm: '5px', md: '10px', lg: '24px' },
          },
        }}
      >
        {mintContentItem.time}
      </TableCell>
    </StyledTableRow>
  );
};

export default MintContentItems;
