import { mintMysteryBox } from '@/services/mint';
import { signMessage } from '@wagmi/core';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

const useMintMysteryBox = () => {
  const [minting, setMinting] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const mint = async () => {
    setMinting(true);

    try {
      const signature = await signMessage({
        message: 'Mint Mystery Box',
      });

      await mintMysteryBox({
        signature,
      });

      enqueueSnackbar(
        'Success mint mystery box! Please wait about 5 mins and check your myria wallet',
        {
          variant: 'success',
        }
      );
    } catch (error: any) {
      enqueueSnackbar(error?.message || 'Failed mint mystery box', {
        variant: 'error',
      });
    } finally {
      setMinting(false);
    }
  };

  return {
    minting,
    mintMysteryBox: mint,
  };
};

export default useMintMysteryBox;
