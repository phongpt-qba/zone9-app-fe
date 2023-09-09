import { ItemSignableBurnParams } from 'myria-core-sdk';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import uuidv4 from 'uuid4';
import { useAccount } from 'wagmi';
import useMyriaTransactionManager from './useMyriaTransactionManager';

const useBurnNFT = () => {
  const transactionManager = useMyriaTransactionManager();
  const { address: account } = useAccount();
  const [burning, setBurning] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const burn = async (item: ItemSignableBurnParams) => {
    setBurning(true);

    try {
      const payload = {
        senderWalletAddress: account,
        partnerRefId: process.env.NEXT_PUBLIC_PROJECT_ID!,
        items: [item],
        requestId: uuidv4(),
        groupRequestId: `mint_weapon_from_mystery_box:${item.tokenData.tokenAddress.toLowerCase()}:${
          item.tokenData.tokenId
        }`,
        description: 'Open Mystery Box',
      };
      const response = await transactionManager.burnNfts(payload);

      return response;
    } catch (error) {
      console.log('error', error);
      enqueueSnackbar(
        'Failed mint Zone9 Weapon NFT. Your mystery box may no longer exist!',
        {
          variant: 'error',
        }
      );
    } finally {
      setBurning(false);
    }

    return false;
  };

  return {
    burning,
    burnNFT: burn,
  };
};

export default useBurnNFT;
