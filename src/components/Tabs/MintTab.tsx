import { ModalType } from '@/config/constants';
import { useMysteryBoxesQuery } from '@/hooks/queries';
import useOpenedMysteryBoxesCountQuery from '@/hooks/queries/useOpenedMysteryBoxesCountQuery';
import useWeaponCollectionQuery from '@/hooks/queries/useWeaponCollectionQuery';
import useMintWeaponFromMysteryBox from '@/hooks/useMintWeaponFromMysteryBox';
import { useModal } from '@/state/global/hooks';
import { Box, Button, CircularProgress } from '@mui/material';
import { green } from '@mui/material/colors';
import { TokenType } from 'myria-core-sdk';
import { useSnackbar } from 'notistack';
import { useMemo } from 'react';
import { useAccount } from 'wagmi';
import ProgressArrow from '../icon/ProgressArrow';
import MintContent from './MintContent/MintContent';

const MintTab = () => {
  const { address } = useAccount();
  const {
    isLoading,
    data: mysteryBoxesData,
    refetch: fetchMysteryBoxes,
  } = useMysteryBoxesQuery(
    {
      walletAddress: address,
      page: 1,
    },
    {
      refetchInterval: 5000,
    }
  );
  const { data: openedBoxesCount } = useOpenedMysteryBoxesCountQuery({
    refetchInterval: 5000,
  });
  const { data: weaponCollectionData } = useWeaponCollectionQuery();
  const burnableBox = useMemo(
    () => mysteryBoxesData?.items?.find((item) => item.status === 'MINTED' && !['450', '290', '481'].includes(item.tokenId)),
    [mysteryBoxesData?.items]
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openModal } = useModal();

  const { minting, mintWeaponFromMysteryBox } = useMintWeaponFromMysteryBox();

  const handleMint = async () => {
    console.log('burnableBox', burnableBox);

    if (!burnableBox) {
      enqueueSnackbar('You have no box!', {
        variant: 'error',
      });

      return;
    }

    const mintResponse = await mintWeaponFromMysteryBox(
      burnableBox.assetType as TokenType,
      burnableBox.tokenAddress,
      burnableBox.tokenId
    );

    if (mintResponse) {
      fetchMysteryBoxes();
      openModal(ModalType.OPEN_MYSTERY_BOX_RESULT_MODAL, mintResponse);
    }
  };

  return (
    <Box
      sx={{
        padding: { xs: '10px', lg: '50px' },
        borderLeft: '1px solid #272826',
      }}
    >
      <Box
        sx={{
          display: { xs: 'block', lg: 'flex' },
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', lg: '48%' },
            paddingBottom: { xs: '20px', lg: '0px' },
          }}
        >
          <video autoPlay loop muted width={'100%'} height={'100%'}>
            <source src="/video/Box.mp4" type="video/mp4" />
          </video>
          <Box
            sx={{
              width: '100%',
              position: 'absolute',
              display: 'flex',
              bottom: { xs: '20%', sm: '15%', lg: '8%' },
              justifyContent: 'space-around',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '5px', sm: '10px', lg: '15px' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '6px', sm: '14px' },
                  height: { xs: '6px', sm: '14px' },
                  background: '#ffffff',
                  border: '1px solid #ffffff',
                  borderRadius: '50%',
                }}
              ></Box>
              <Box sx={{ fontSize: { xs: '6px', sm: '12px', md: '16px' } }}>
                <Box>59%</Box>
                <Box sx={{ color: '#9A9A9A' }}>Common</Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '5px', sm: '10px', lg: '15px' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '6px', sm: '14px' },
                  height: { xs: '6px', sm: '14px' },
                  background: '#05FF00',
                  border: '1px solid #05FF00',
                  borderRadius: '50%',
                }}
              ></Box>
              <Box sx={{ fontSize: { xs: '6px', sm: '12px', md: '16px' } }}>
                <Box>28%</Box>
                <Box sx={{ color: '#9A9A9A' }}>Uncommon</Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '5px', sm: '10px', lg: '15px' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '6px', sm: '14px' },
                  height: { xs: '6px', sm: '14px' },
                  background: '#0066FF',
                  border: '1px solid #0066FF',
                  borderRadius: '50%',
                }}
              ></Box>
              <Box sx={{ fontSize: { xs: '6px', sm: '12px', md: '16px' } }}>
                <Box>12%</Box>
                <Box sx={{ color: '#9A9A9A' }}>Rare</Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '5px', sm: '10px', lg: '15px' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '6px', sm: '14px' },
                  height: { xs: '6px', sm: '14px' },
                  background: '#DB00FF',
                  border: '1px solid #DB00FF',
                  borderRadius: '50%',
                }}
              ></Box>
              <Box sx={{ fontSize: { xs: '6px', sm: '12px', md: '16px' } }}>
                <Box>1%</Box>
                <Box sx={{ color: '#9A9A9A' }}>Epic</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', lg: '48%' },
            padding: { xs: '10px 30px', lg: '25px 85px' },
            border: '1px solid #272826',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: { xs: '30px', lg: '0px' },
          }}
        >
          <Box
            sx={{
              fontSize: { xs: '18px', sm: '40px' },
              fontWeight: 800,
              textAlign: 'center',
            }}
          >
            PIONEER MINT
          </Box>
          {/* <Box
            sx={{ fontSize: { xs: '7px', sm: '10px', lg: '12px', xl: '24px' } }}
          >
            <span style={{ color: '#9A9A9A' }}>Countdown: </span>
            <span>7 Days</span>
          </Box> */}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: { xs: '7px', sm: '10px', lg: '12px', xl: '24px' },
            }}
          >
            <Box sx={{ width: '35%' }}>
              <span style={{ color: '#9A9A9A' }}>Total: </span>
              <span>1000</span>
            </Box>
            <Box sx={{ width: '35%' }}>
              <span style={{ color: '#9A9A9A' }}>Opened: </span>
              <span>{openedBoxesCount ?? 0}</span>
            </Box>
            <Box sx={{ width: '35%' }}>
              <span style={{ color: '#9A9A9A' }}>My box:</span>
              <span>{mysteryBoxesData?.total ?? 0}</span>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '40%' }}>
              <Box sx={{ position: 'relative' }}>
                <Button
                  sx={{
                    width: '100%',
                    border: '1px solid #F6C660',
                    padding: { xs: '6px 32px', sm: '12px 50px' },
                    color: 'white',
                    '&.MuiButton-root:hover': {
                      backgroundColor: '#F6C660',
                    },
                    fontSize: { xs: '7px', sm: '10px', lg: '12px', xl: '24px' },
                  }}
                  disabled={minting || !burnableBox}
                  onClick={handleMint}
                >
                  Mint
                </Button>

                {(minting || isLoading) && (
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
            </Box>
            <Box sx={{ width: '40%' }}>
              <Button
                href={
                  weaponCollectionData?.publicId
                    ? process.env.NEXT_PUBLIC_ENVIROMENT === 'production'
                      ? `https://myria.com/marketplace/collection/?id=${weaponCollectionData?.publicId}`
                      : `https://staging.nonprod-myria.com/marketplace/collection/?id=${weaponCollectionData?.publicId}`
                    : undefined
                }
                target="_blank"
                sx={{
                  width: '100%',
                  border: '1px solid #F6C660',
                  color: 'white',
                  padding: { xs: '6px 32px', sm: '12px 50px' },
                  '&.MuiButton-root:hover': {
                    backgroundColor: '#F6C660',
                  },
                  fontSize: { xs: '7px', sm: '10px', lg: '12px', xl: '24px' },
                }}
              >
                Marketplace
              </Button>
            </Box>
          </Box>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Box
              sx={{
                color: '#9A9A9A',
                fontSize: { xs: '7px', sm: '10px', lg: '12px', xl: '24px' },
              }}
            >
              Rules
            </Box>
            <ProgressArrow />
          </Box> */}
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', padding: '30px 0px' }}>
        Viewlotteries record
      </Box>
      <MintContent />
    </Box>
  );
};

export default MintTab;
