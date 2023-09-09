import { mintWeaponFromMysteryBox } from '@/services/mint';
import { useStarkKey } from '@/state/user/hooks';
import { TokenType } from 'myria-core-sdk';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import useBurnNFT from './useBurnNFT';

const useMintWeaponFromMysteryBox = () => {
  const [minting, setMinting] = useState(false);
  const { burning, burnNFT } = useBurnNFT();
  const { address: account } = useAccount();
  const starkKey = useStarkKey();
  const { enqueueSnackbar } = useSnackbar();

  const mint = async (
    assetType: TokenType,
    tokenAddress: string,
    mysteryBoxTokenId: string
  ) => {
    if (!starkKey) {
      return;
    }

    setMinting(true);

    try {
      const success = await burnNFT({
        quantizedAmount: '1',
        tokenType: assetType as TokenType,
        tokenData: {
          tokenAddress,
          tokenId: mysteryBoxTokenId,
        },
      });

      if (!success) {
        return;
      }

      const response = await mintWeaponFromMysteryBox({
        walletAddress: account,
        starkKey,
        mysteryBoxTokenId,
      });

      return response;
    } catch (error: any) {
      if (error?.message) {
        enqueueSnackbar(error?.message, {
          variant: 'error',
        });
      } else {
        enqueueSnackbar(
          'Failed mint Zone9 Weapon NFT. Your mystery box may no longer exist!',
          {
            variant: 'error',
          }
        );
      }
    } finally {
      setMinting(false);
    }
  };

  return {
    minting: minting || burning,
    mintWeaponFromMysteryBox: mint,
  };
};

export default useMintWeaponFromMysteryBox;
