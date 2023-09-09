import React, { useEffect, useRef, useState } from 'react';
import { useToggle } from 'ahooks';
import {
  Box,
  Tab,
  Tabs,
  Button,
  Drawer,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import StorageContent from '../StorageContent';
import MysteryBoxTab from './MysteryBox/MysteryBoxTab';
import NFTsTab from './NFTs/NFTsTab';
import RarityFilter from '../Filter/RarityFilter';
import TypeFilter from '../Filter/TypeFilter';
import FilterExpand from '../icon/FilterExpand';
import FilterExpandDown from '../icon/FilterExpandDown';

import RarityActive from '../icon/RarityActive';
import RarityUnactive from '../icon/RarityUnactive';

const StorageTab = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (_, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
  const [isFavoriteActive, { toggle }] = useToggle(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const classes = { height: height };
  useEffect(() => {
    if (open) {
      setHeight(containerRef?.current?.clientHeight ?? 0);
    } else {
      setHeight(0);
    }
  }, [open]);

  const handleFilterIconClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Box
        sx={{ borderLeft: '1px solid #272826', paddingRight: { sm: '50px' } }}
      >
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <Accordion>
            <AccordionSummary
              sx={{
                padding: '0px 32px',
                color: '#9A9A9A',
                fontSize: { sm: '12px', lg: '30px' },
              }}
              expandIcon={<FilterExpandDown />}
            >
              Filters
            </AccordionSummary>
            <AccordionDetails>
              <Button
                onClick={toggle}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: 'white',
                  width: '100%',
                  padding: '16px',
                  borderRight: '1px solid #272826',
                  borderBottom: '1px solid #272826',
                }}
              >
                <Box sx={{ fontSize: { sm: '7px', lg: '16px', xl: '20px' } }}>
                  Favorite
                </Box>
                {isFavoriteActive && <RarityActive />}
                {!isFavoriteActive && <RarityUnactive />}
              </Button>
              <RarityFilter />
              <TypeFilter />
            </AccordionDetails>
          </Accordion>
          <Box
            sx={{
              paddingTop: '32px',
            }}
          >
            {/* <StorageContent /> */}
            <Box
              sx={{
                display: { xs: 'flex', sm: 'block' },
                justifyContent: 'center',
              }}
            >
              <Tabs
                value={currentTabIndex}
                onChange={handleTabChange}
                sx={{
                  paddingBottom: '30px',
                  paddingTop: '16px',
                  '& .MuiTabs-indicator': { backgroundColor: '#F6C660' },
                  '& .MuiTab-root.Mui-selected': { color: '#F6C660' },
                }}
              >
                <Tab label="Mystery Box"></Tab>
                <Tab label="NFTs"></Tab>
              </Tabs>
            </Box>
            <Box>
              {currentTabIndex === 0 && (
                <Box>
                  <MysteryBoxTab />
                </Box>
              )}
              {currentTabIndex === 1 && (
                <Box>
                  <NFTsTab />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Box
            ref={containerRef}
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Drawer
              open={open}
              variant="persistent"
              anchor="left"
              sx={{
                position: 'relative',
                width: 'auto',
                '& .MuiBackdrop-root': {
                  display: 'none',
                },
                '& .MuiDrawer-paper': {
                  width: {
                    sm: '150px',
                    lg: '200px',
                    xl: '250px',
                    xxl: '350px',
                  },
                  zIndex: 9,
                  position: 'absolute',
                  height: classes.height,
                  transition: 'none !important',
                },
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px',
                    borderBottom: '1px solid #272826',
                    borderRight: '1px solid #272826',
                  }}
                >
                  <Box
                    sx={{
                      color: '#9A9A9A',
                      fontSize: { sm: '12px', lg: '30px' },
                    }}
                  >
                    Filters
                  </Box>

                  <Button
                    sx={{ padding: 0, minWidth: 0 }}
                    onClick={handleFilterIconClick}
                  >
                    <Box>
                      <FilterExpand />
                    </Box>
                  </Button>
                </Box>
                <Button
                  onClick={toggle}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'white',
                    width: '100%',
                    padding: '16px',
                    borderRight: '1px solid #272826',
                    borderBottom: '1px solid #272826',
                  }}
                >
                  <Box sx={{ fontSize: { sm: '7px', lg: '16px', xl: '20px' } }}>
                    Favorite
                  </Box>
                  {isFavoriteActive && <RarityActive />}
                  {!isFavoriteActive && <RarityUnactive />}
                </Button>
                <RarityFilter />
                <TypeFilter />
              </Box>
            </Drawer>
            <Box sx={{ borderRight: '1px solid #272826' }}>
              <Button
                sx={{ padding: '16px', transform: 'rotate(180deg)' }}
                // onClick={handleFilterIconClick}
              >
                <FilterExpand />
              </Button>
            </Box>

            {open && (
              <Box
                sx={{
                  paddingTop: '32px',
                  width: {
                    sm: 'calc(100% - 170px)',
                    lg: 'calc(100% - 250px)',
                    xl: 'calc(100% - 300px)',
                    xxl: 'calc(100% - 400px)',
                  },
                }}
              >
                {/* <StorageContent /> */}
                <Box
                  sx={{
                    display: { xs: 'flex', sm: 'block' },
                    justifyContent: 'center',
                  }}
                >
                  <Tabs
                    value={currentTabIndex}
                    onChange={handleTabChange}
                    sx={{
                      paddingBottom: '30px',
                      paddingTop: '16px',
                      '& .MuiTabs-indicator': { backgroundColor: '#F6C660' },
                      '& .MuiTab-root.Mui-selected': { color: '#F6C660' },
                    }}
                  >
                    <Tab label="Mystery Box"></Tab>
                    <Tab label="NFTs"></Tab>
                  </Tabs>
                </Box>
                <Box>
                  {currentTabIndex === 0 && (
                    <Box>
                      <MysteryBoxTab />
                    </Box>
                  )}
                  {currentTabIndex === 1 && (
                    <Box>
                      <NFTsTab />
                    </Box>
                  )}
                </Box>
              </Box>
            )}
            {!open && (
              <Box sx={{ paddingTop: '32px', width: '100%' }}>
                {/* <StorageContent /> */}
                <Box
                  sx={{
                    display: { xs: 'flex', sm: 'block' },
                    justifyContent: 'center',
                  }}
                >
                  <Tabs
                    value={currentTabIndex}
                    onChange={handleTabChange}
                    sx={{
                      paddingBottom: '30px',
                      paddingTop: '16px',
                      '& .MuiTabs-indicator': { backgroundColor: '#F6C660' },
                      '& .MuiTab-root.Mui-selected': { color: '#F6C660' },
                    }}
                  >
                    <Tab label="Mystery Box"></Tab>
                    <Tab label="NFTs"></Tab>
                  </Tabs>
                </Box>
                <Box>
                  {currentTabIndex === 0 && (
                    <Box>
                      <MysteryBoxTab />
                    </Box>
                  )}
                  {currentTabIndex === 1 && (
                    <Box>
                      <NFTsTab />
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StorageTab;
