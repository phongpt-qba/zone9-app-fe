import { Tabs, Tab, Box } from '@mui/material';
import React, { useState } from 'react';

import StorageTab from '../components/Tabs/StorageTab';
import ListedTab from '../components/Tabs/ListedTab';
import MarketTab from '../components/Tabs/MarketTab';
import TransacTab from '../components/Tabs/TransacTab';
import MintTab from '../components/Tabs/MintTab';

const Z9Tab = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (event, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
  return (
    <Box sx={{ paddingLeft: { sm: '20px', md: '50px' } }}>
      <Box
        sx={{
          borderBottom: '1px solid #272826',
          borderLeft: '1px solid #272826',
        }}
      >
        <Tabs
          variant="scrollable"
          value={currentTabIndex}
          onChange={handleTabChange}
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            '& .MuiTabs-indicator': { backgroundColor: '#F6C660' },
            '& .MuiTab-root.Mui-selected': { color: '#F6C660' },
          }}
        >
          <Tab
            sx={{
              xs: { fontSize: '10px' },
              sm: { fontSize: '14px' },
              width: '200px',
            }}
            label="Marketplace"
          ></Tab>
          <Tab
            sx={{
              xs: { fontSize: '10px' },
              sm: { fontSize: '14px' },
              width: '200px',
            }}
            label="Storage"
          ></Tab>
          <Tab
            sx={{
              xs: { fontSize: '10px' },
              sm: { fontSize: '14px' },
              width: '200px',
            }}
            label="Listed"
          ></Tab>
          <Tab
            sx={{
              xs: { fontSize: '10px' },
              sm: { fontSize: '14px' },
              width: '200px',
            }}
            label="Transaction Log"
          ></Tab>
          <Tab
            sx={{
              xs: { fontSize: '10px' },
              sm: { fontSize: '14px' },
              width: '200px',
            }}
            label="Mint NFTs"
          ></Tab>
        </Tabs>
      </Box>
      <Box>
        {currentTabIndex === 0 && (
          <Box>
            <MarketTab />
          </Box>
        )}
        {currentTabIndex === 1 && (
          <Box>
            <StorageTab />
          </Box>
        )}
        {currentTabIndex === 2 && (
          <Box>
            <ListedTab />
          </Box>
        )}
        {currentTabIndex === 3 && (
          <Box>
            <TransacTab />
          </Box>
        )}
        {currentTabIndex === 4 && (
          <Box>
            <MintTab />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Z9Tab;
