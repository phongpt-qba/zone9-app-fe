import { useSnackbar } from 'notistack';
import { useState } from 'react';
import uuidv4 from 'uuid4';
import { useAccount } from 'wagmi';
import useDeveloperAccountManager from './useDeveloperAccountManager';
import useMyriaTransactionManager from './useMyriaTransactionManager';

const useTransferNFT = () => {
  const transactionManager = useMyriaTransactionManager();
  const { address: account } = useAccount();
  const [transfering, setTransfering] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const developerAccountManager = useDeveloperAccountManager();

  const transfer = async (
    tokenAddress: string,
    tokenId: string,
    description: string,
    receiverAddress: string
  ) => {
    setTransfering(true);

    try {
      const [sender, receiver] = await Promise.all([
        developerAccountManager.getUserByWalletAddress(account),
        developerAccountManager.getUserByWalletAddress(receiverAddress),
      ]);

      const payload = {
        senderWalletAddress: account,
        partnerRefId: process.env.NEXT_PUBLIC_PROJECT_ID!,
        requestId: uuidv4(),
        groupRequestId: uuidv4(),
        description,
        tokenAddress,
        tokenId,
        quantizedAmount: '1',
        senderPublicKey: sender.starkKey,
        receiverPublicKey: receiver.starkKey,
      };
      const response = await transactionManager.transferERC721Token(payload);

      enqueueSnackbar('Success transfer NFT', {
        variant: 'success',
      });

      return response;
    } catch (error: any) {
      console.log('transfer error', error);

      enqueueSnackbar(`Failed transfer NFT`, {
        variant: 'error',
      });
    } finally {
      setTransfering(false);
    }

    return false;
  };

  return {
    transfering,
    transferNFT: transfer,
  };
};

export default useTransferNFT;
