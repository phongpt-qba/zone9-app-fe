import { CHAIN_QUERY_NAME } from '@/config/chains';
import { ConnectorNames } from '@/config/wallet';
import { useAppDispatch } from '@/state';
import { setMyriaUser } from '@/state/user/actions';
import { metaMaskConnector } from '@/utils/wagmi';
import replaceBrowserHistory from '@utils/replaceBrowserHistory';
import { EnvTypes, UserType, WalletManager } from 'myria-core-sdk';
import { useSnackbar } from 'notistack';
import { useCallback } from 'react';
import {
  ConnectorNotFoundError,
  SwitchChainNotSupportedError,
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
} from 'wagmi';
import { clearUserStates } from '../utils/clearUserStates';
import { useActiveChainId } from './useActiveChainId';
import { useSessionChainId } from './useSessionChainId';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const { connectAsync, connectors } = useConnect();
  const { chain } = useNetwork();
  const { disconnectAsync } = useDisconnect();
  const { chainId } = useActiveChainId();
  const [, setSessionChainId] = useSessionChainId();
  const { address: account } = useAccount();
  const { enqueueSnackbar } = useSnackbar();

  const login = useCallback(
    async (connectorID?: ConnectorNames) => {
      connectorID = connectorID ?? (metaMaskConnector.id as ConnectorNames);
      const findConnector = connectors.find((c) => c.id === connectorID);

      try {
        const connected = await connectAsync({
          connector: findConnector,
          chainId,
        });
        if (!connected.chain.unsupported && connected.chain.id !== chainId) {
          replaceBrowserHistory('chain', CHAIN_QUERY_NAME[connected.chain.id]);
          setSessionChainId(connected.chain.id);
        }

        return connected;
      } catch (error) {
        if (error instanceof ConnectorNotFoundError) {
          enqueueSnackbar('Metamask not found!', {
            variant: 'error',
          });

          return;
        }

        if (error instanceof SwitchChainNotSupportedError) {
          enqueueSnackbar(
            'Unable to switch network. Please try it on your wallet!',
            {
              variant: 'error',
            }
          );
        }
      }
      return undefined;
    },
    [connectors, connectAsync, chainId, setSessionChainId, enqueueSnackbar]
  );

  const logout = useCallback(async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.error(error);
    } finally {
      clearUserStates(dispatch, { chainId: chain?.id });
    }
  }, [disconnectAsync, dispatch, chain?.id]);

  const loginMyria = useCallback(async () => {
    if (!account) {
      return;
    }

    const walletManager = new WalletManager(
      process.env.NEXT_PUBLIC_ENVIROMENT === 'production'
        ? EnvTypes.PRODUCTION
        : EnvTypes.STAGING
    );
    console.log('project id', process.env.NEXT_PUBLIC_PROJECT_ID);
    console.log('environment', process.env.NEXT_PUBLIC_ENVIROMENT);

    try {
      const myriaUserData = await walletManager.connectAndLogin(
        UserType.PARTNER,
        process.env.NEXT_PUBLIC_PROJECT_ID // Testnet (Staging) Project ID for the partner game
      );
      dispatch(setMyriaUser(myriaUserData));
    } catch (error) {
      console.log('error', error);

      logout();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return { login, logout, loginMyria };
};

export default useAuth;
