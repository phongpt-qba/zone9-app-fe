import { Box, Button } from '@mui/material';
import React, { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { MysteryBox } from '@/types/api/response/box';

const MysteryBoxItems: FC<{ box: MysteryBox; onTransfer?: () => void }> = ({
  box,
  onTransfer,
}) => {
  return (
    <Grid xs={6} sm={4} md={3} lg={2.4}>
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '7.59762px',
          boxShadow: ' 0px 0px 10px rgba(255, 255, 255, 0.05)',
        }}
        height="100%"
      >
        <Box>
          <video
            autoPlay
            muted
            loop
            width={'100%'}
            poster={box?.metadataOptional?.imageUrl}
            src={box?.metadataOptional?.animationUrl}
          />
        </Box>
        <Box sx={{ padding: '10px' }}>
          <Box>{box.name || 'Mystery Box'}</Box>
        </Box>
        <Button
          target="_blank"
          href={
            box?.id
              ? process.env.NEXT_PUBLIC_ENVIROMENT === 'production'
                ? `https://myria.com/marketplace/asset-detail/?id=${box.id}`
                : `https://staging.nonprod-myria.com/marketplace/asset-detail/?id=${box.id}`
              : undefined
          }
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 700,
            mb: '4px',
          }}
          fullWidth
        >
          Sell now
        </Button>

        <Button
          sx={{
            borderRadius: '0px 0px 8px 8px',
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 700,
            '&.MuiButton-root.Mui-disabled': {
              color: 'black'
            }
          }}
          disabled={box.status !== 'MINTED'}
          fullWidth
          onClick={onTransfer}
        >
          Transfer
        </Button>
      </Box>
    </Grid>
  );
};

export default MysteryBoxItems;
