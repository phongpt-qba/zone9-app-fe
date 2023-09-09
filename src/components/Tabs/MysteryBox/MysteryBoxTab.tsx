import TransferModal from '@/components/Modal/TransferModal';
import { ModalType } from '@/config/constants';
import { useMysteryBoxesQuery } from '@/hooks/queries';
import useAuth from '@/hooks/useAuth';
import { useModal } from '@/state/global/hooks';
import { GetMysteryBoxesPayload } from '@/types/api/payload/box';
import {
  Box,
  Button,
  Pagination,
  PaginationItem,
  Stack,
  styled,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import MysteryBoxItems from './MysteryBoxItems';

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

const MysteryBoxTab = () => {
  const { address } = useAccount();
  const [payload, setPayload] = useState<GetMysteryBoxesPayload>({
    walletAddress: address,
    page: 1,
  });
  const {
    isLoading,
    data: mysteryBoxesData,
    refetch,
  } = useMysteryBoxesQuery(payload, {
    refetchInterval: 5000,
  });
  const { login, logout } = useAuth();
  const { isOpenModal, type, openModal, closeModal } = useModal();

  const handleChangePagination = (_, page) => {
    setPayload((prev) => ({
      ...prev,
      page,
    }));
  };

  const handleWalletButtonClicked = () => {
    if (address) {
      logout();
    } else {
      login();
    }
  };

  const handleTransfer = (box) => {
    openModal(ModalType.TRANSFER_NFT, box);
  };

  const handleSuccessTransfer = () => {
    closeModal();
    refetch();
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
      {!(mysteryBoxesData?.items?.length > 0) && (
        <Box sx={{ textAlign: 'center', padding: '0px 0px 48px' }}>
          <Box sx={{ paddingBottom: '50px' }}>You do not own a box</Box>
          <Link href="/claim-page">
            <Button sx={{ backgroundColor: '#F6C660', color: 'white' }}>
              Go to Mint
            </Button>
          </Link>
        </Box>
      )}
      <TransferModal
        open={isOpenModal && type === ModalType.TRANSFER_NFT}
        onClose={closeModal}
        onOk={handleSuccessTransfer}
      />
      {mysteryBoxesData?.items?.length > 0 && (
        <Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {mysteryBoxesData?.items?.map((mysteryBoxItem) => (
                <MysteryBoxItems
                  key={mysteryBoxItem.tokenId}
                  box={mysteryBoxItem}
                  onTransfer={handleTransfer.bind(this, mysteryBoxItem)}
                />
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
              count={Math.ceil(
                mysteryBoxesData?.total / mysteryBoxesData?.perPage
              )}
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
        </Box>
      )}
    </Box>
  );
};

export default MysteryBoxTab;
