import useWeaponsQuery from '@/hooks/queries/usseWeaponsQuery';
import { GetMysteryBoxesPayload } from '@/types/api/payload/box';
import {
  Box,
  Button,
  CircularProgress,
  Pagination,
  PaginationItem,
  Stack,
  styled,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import NFT from './NFT';
import useAuth from '@/hooks/useAuth';

const StyledPagination = styled(Pagination)({
  '& .MuiPagination-ul li:last-child': {
    marginLeft: '16px',
  },
  '& .MuiPagination-ul li:last-child button': {
    border: '1px solid #9A9A9A',
    borderRadius: '3.29128px',
    padding: '16px 20px 16px 20px',
  },
  '& .MuiPagination-ul li:last-child button:hover': {
    border: 0,
    backgroundColor: 'rgba(246, 198, 96, 0.3)',
  },
  '& .MuiPagination-ul li:first-child': {
    marginRight: '16px',
  },
  '& .MuiPagination-ul li:first-child button': {
    border: '1px solid #9A9A9A',
    borderRadius: '3.29128px',
    padding: '16px 20px 16px 20px',
  },
  '& .MuiPagination-ul li:first-child button:hover': {
    border: 0,
    backgroundColor: 'rgba(246, 198, 96, 0.3)',
  },
});

const NFTsTab = () => {
  const { address } = useAccount();
  const [payload, setPayload] = useState<GetMysteryBoxesPayload>({
    walletAddress: address,
    page: 1,
  });
  const { data, isLoading } = useWeaponsQuery(payload);
  const { login, logout } = useAuth();

  const handleWalletButtonClicked = () => {
    if (address) {
      logout();
    } else {
      login();
    }
  };

  const handleChangePagination = (_, page) => {
    setPayload((prev) => ({
      ...prev,
      page,
    }));
  };

  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      walletAddress: address,
      page: 1,
    }));
  }, [address]);

  if (!address) {
    return (
      <Box sx={{ textAlign: 'center', padding: '0px 0px 48px' }}>
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
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', padding: '50px 0px' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {!(data?.items?.length > 0) && (
        <Box sx={{ textAlign: 'center', padding: '0px 0px 48px' }}>
          <Box sx={{ paddingBottom: '50px' }}>You do not own a weapon</Box>
          <Link href="/claim-page">
            <Button sx={{ backgroundColor: '#F6C660', color: 'white' }}>
              Go to Mint
            </Button>
          </Link>
        </Box>
      )}

      {data?.items?.length > 0 && (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {data?.items.map((item) => (
                <NFT key={item.id} item={item} />
              ))}
            </Grid>
          </Box>
          <Stack
            direction={'row'}
            spacing={10}
            sx={{ justifyContent: 'center', padding: '80px 0px' }}
          >
            <StyledPagination
              onChange={handleChangePagination}
              page={payload.page}
              siblingCount={0}
              count={Math.ceil(data?.total / data?.perPage)}
              renderItem={(item) => (
                <PaginationItem
                  sx={{
                    fontSize: { xs: '7px', sm: '10px', md: '16px' },
                  }}
                  slots={{
                    previous: () => 'Previous',
                    next: () => 'Next',
                  }}
                  {...item}
                />
              )}
            />
          </Stack>
        </>
      )}
    </Box>
  );
};

export default NFTsTab;
