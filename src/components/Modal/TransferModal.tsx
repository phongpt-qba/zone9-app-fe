import useTransferNFT from '@/hooks/useTransferNFT';
import { useModal } from '@/state/global/hooks';
import { MysteryBox } from '@/types/api/response/box';
import {
  Box,
  Button,
  CircularProgress,
  Modal,
  ModalProps,
  TextField,
  Typography,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { FC, useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TransferModal: FC<
  Omit<ModalProps, 'children'> & {
    onClose?: () => void;
    onOk?: () => void;
  }
> = ({ onOk, ...rest }) => {
  const [address, setAddress] = useState('');
  const { props: box }: { props: MysteryBox } = useModal();
  const { transferNFT, transfering } = useTransferNFT();

  const handleTransfer = async (event) => {
    event.preventDefault();

    const success = await transferNFT(
      box.tokenAddress,
      box.tokenId,
      `Transfer mystery box ${box.tokenId}`,
      address
    );

    if (success) {
      onOk && onOk();
      setAddress('');
    }
  };

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <Modal
      {...rest}
      aria-labelledby="transfer-modal-title"
      aria-describedby="transfer-modal-description"
    >
      <Box sx={style}>
        <Typography id="transfer-modal-title" variant="h6" component="h2">
          Transfer NFT
        </Typography>

        <Typography id="transfer-modal-description" sx={{ mt: 2 }}>
          <Box component="form" onSubmit={handleTransfer}>
            <TextField
              required
              label="Wallet Address"
              variant="outlined"
              fullWidth
              sx={{
                mb: '1rem',
              }}
              value={address}
              onChange={handleChange}
            />

            <Box sx={{ position: 'relative' }}>
              <Button
                disabled={transfering}
                type="submit"
                variant="contained"
                fullWidth
              >
                Transfer
              </Button>

              {transfering && (
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
        </Typography>
      </Box>
    </Modal>
  );
};

export default TransferModal;
