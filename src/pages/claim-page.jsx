import { Box, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import Header from '../components/Header';
import useMintMysteryBox from '../hooks/useMintMysteryBox';
import { useAccount } from 'wagmi';
import useAuth from '@/hooks/useAuth';
import { green } from '@mui/material/colors';
import Link from 'next/link';

const ClaimPage = () => {
  const { minting, mintMysteryBox } = useMintMysteryBox();
  const handleMintClick = () => {
    mintMysteryBox();
  };
  const { address: account } = useAccount();
  const { login, logout } = useAuth();
  const handleWalletButtonClicked = () => {
    if (account) {
      logout();
    } else {
      login();
    }
  };

  return (
    <Box>
      <Header />
      <Box sx={{ position: 'relative' }}>
        <video autoPlay loop muted width={'100%'} height={'100%'}>
          <source src="/video/Box.mp4" type="video/mp4" />
        </video>
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: '20px', lg: '100px' },
          }}
        >
          {!account && (
            <Button
              onClick={handleWalletButtonClicked}
              sx={{
                color: 'black',
                fontSize: {
                  xs: '10px',
                  sm: '12px',
                  md: '16px',
                  lg: '18px',
                  xl: '32px',
                },
                fontWeight: 700,
                padding: { xs: '5px', sm: '0px 20px' },
                borderRadius: '15px',
                '&.MuiButton-root ': { backgroundColor: '#FCCC38' },
              }}
            >
              <p>Connect Wallet</p>
            </Button>
          )}
          {account && !minting && (
            <Box>
              <Button
                onClick={handleMintClick}
                sx={{
                  color: 'black',
                  fontSize: {
                    xs: '10px',
                    sm: '12px',
                    md: '16px',
                    lg: '18px',
                    xl: '32px',
                  },
                  fontWeight: 700,
                  padding: { xs: '5px', sm: '0px 20px' },
                  borderRadius: '15px',
                  '&.MuiButton-root ': { backgroundColor: '#FCCC38' },
                }}
              >
                <p>Mint Now</p>
              </Button>
            </Box>
          )}
          {account && minting && (
            <Box sx={{ position: 'relative' }}>
              <Button
                disabled
                sx={{
                  color: 'black',
                  fontSize: {
                    xs: '10px',
                    sm: '12px',
                    md: '16px',
                    lg: '18px',
                    xl: '32px',
                  },
                  fontWeight: 700,
                  padding: { xs: '5px', sm: '0px 20px' },
                  borderRadius: '15px',
                  '&.MuiButton-root ': { backgroundColor: '#FCCC38' },
                }}
              >
                <p>Mint Now</p>
              </Button>
              {minting && (
                <Box
                  sx={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <CircularProgress
                    size={15}
                    sx={{
                      color: green[500],
                    }}
                  />
                </Box>
              )}
            </Box>
          )}
          <Link href="/">
            <Button
              sx={{
                color: 'black',
                fontSize: {
                  xs: '10px',
                  sm: '12px',
                  md: '16px',
                  lg: '18px',
                  xl: '32px',
                },
                fontWeight: 700,
                padding: { xs: '5px', sm: '0px 20px' },
                borderRadius: '15px',
                '&.MuiButton-root ': { backgroundColor: '#FCCC38' },
              }}
            >
              <p>Go To Storage</p>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ClaimPage;
