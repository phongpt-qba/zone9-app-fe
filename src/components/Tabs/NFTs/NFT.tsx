import { Weapon } from '@/types/api/response/weapon';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FC } from 'react';

const NFT: FC<{ item: Weapon }> = ({ item }) => {
  return (
    <Grid xs={6} sm={4} md={3} lg={2.4}>
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '7.59762px',
          boxShadow: ' 0px 0px 10px rgba(255, 255, 255, 0.05)',
          height: '100%',
        }}
      >
        <Box>
          <video
            autoPlay
            muted
            loop
            width={'100%'}
            poster={item.metadataOptional?.imageUrl}
            src={item.metadataOptional?.animationUrl}
          />
        </Box>
        <Box sx={{ padding: '10px' }}>
          <Box>{item.name || 'Weapon'}</Box>
          <Box>{item?.metadata?.rank}</Box>
        </Box>
        <Button
          target="_blank"
          href={
            item?.id
              ? process.env.NEXT_PUBLIC_ENVIROMENT === 'production'
                ? `https://myria.com/marketplace/asset-detail/?id=${item.id}`
                : `https://staging.nonprod-myria.com/marketplace/asset-detail/?id=${item.id}`
              : undefined
          }
          sx={{
            borderRadius: '0px 0px 7.59762px 7.59762px',
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 700,
          }}
          fullWidth
        >
          Sell now
        </Button>
      </Box>
    </Grid>
  );
};

export default NFT;
