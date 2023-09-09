import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AtomBox } from '@ui';

import MintContentItems from './MintContentItems';

const MintContent = () => {
  const mintContentItems = [
    {
      id: 1,
      index: '1',
      icon: '/img/WeaponIcon.png',
      type: 'Melee',
      rarity: 'Rare',
      tx: 'DCM ... Avl',
      time: '11:11 2022/08/29',
    },
    {
      id: 2,
      index: '2',
      icon: '/img/WeaponIcon.png',
      type: 'Melee',
      rarity: 'Rare',
      tx: 'DCM ... Avl',
      time: '11:11 2022/08/29',
    },
    {
      id: 3,
      index: '3',
      icon: '/img/WeaponIcon.png',
      type: 'Melee',
      rarity: 'Rare',
      tx: 'DCM ... Avl',
      time: '11:11 2022/08/29',
    },
    {
      id: 4,
      index: '4',
      icon: '/img/WeaponIcon.png',
      type: 'Melee',
      rarity: 'Rare',
      tx: 'DCM ... Avl',
      time: '11:11 2022/08/29',
    },
  ];

  return (
    <AtomBox>
      <TableContainer component={Paper}>
        <Table aria-lable="customized table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
                  '&.MuiTableCell-root': { padding: { xs: '0px', lg: '24px' } },
                }}
                align="center"
              >
                Index
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
                  '&.MuiTableCell-root': { padding: { xs: '0px', lg: '24px' } },
                }}
                align="center"
              >
                Type
              </TableCell>
              <TableCell
                sx={{
                  '&.MuiTableCell-root': { padding: { xs: '0px', lg: '24px' } },
                  fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
                }}
                align="center"
              >
                Rarity
              </TableCell>
              <TableCell
                sx={{
                  '&.MuiTableCell-root': { padding: { xs: '0px', lg: '24px' } },
                  fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
                }}
                align="center"
              >
                TX
              </TableCell>
              <TableCell
                sx={{
                  '&.MuiTableCell-root': { padding: { xs: '0px', lg: '24px' } },
                  fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '21px' },
                }}
                align="center"
              >
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mintContentItems.map((mintContentItem) => (
              <MintContentItems
                key={mintContentItem.id}
                mintContentItem={mintContentItem}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AtomBox>
  );
};

export default MintContent;
