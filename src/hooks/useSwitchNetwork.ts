import { useCallback, useMemo } from 'react';
import { useSessionChainId } from './useSessionChainId';
import replaceBrowserHistory from '@utils/replaceBrowserHistory';
import { ChainId } from '@sdk';
import { CHAIN_QUERY_NAME } from '@/config/chains';
import { useSwitchNetworkLoading } from './useSwitchNetworkLoading';
import { useAccount, useSwitchNetwork as useSwitchNetworkWallet } from 'wagmi';
import { useSnackbar } from 'notistack';
import { ConnectorNames } from '@/config/wallet';

export function useSwitchNetworkLocal() {
  const [, setSessionChainId] = useSessionChainId();
  return useCallback(
    (chainId: number) => {
      setSessionChainId(chainId);
      replaceBrowserHistory(
        'chain',
        chainId === ChainId.ETHEREUM ? null : CHAIN_QUERY_NAME[chainId]
      );
    },
    [setSessionChainId]
  );
}

export function useSwitchNetwork() {
  const [loading, setLoading] = useSwitchNetworkLoading();
  const {
    switchNetworkAsync: _switchNetworkAsync,
    isLoading: _isLoading,
    switchNetwork: _switchNetwork,
    ...switchNetworkArgs
  } = useSwitchNetworkWallet();
  const { enqueueSnackbar } = useSnackbar();
  const { isConnected, connector } = useAccount();

  const switchNetworkLocal = useSwitchNetworkLocal();
  const isLoading = _isLoading || loading;

  const switchNetworkAsync = useCallback(
    async (chainId: number) => {
      if (isConnected && typeof _switchNetworkAsync === 'function') {
        if (isLoading) return;
        setLoading(true);
        return _switchNetworkAsync(chainId)
          .then((c) => {
            // well token pocket
            if (window.ethereum?.isTokenPocket === true) {
              switchNetworkLocal(chainId);
              window.location.reload();
            }
            return c;
          })
          .catch(() => {
            // TODO: review the error
            enqueueSnackbar(
              'Error connecting, please retry and confirm in wallet!',
              {
                variant: 'error',
              }
            );
          })
          .finally(() => setLoading(false));
      }
      return new Promise(() => {
        switchNetworkLocal(chainId);
      });
    },
    [
      isConnected,
      _switchNetworkAsync,
      isLoading,
      setLoading,
      switchNetworkLocal,
      enqueueSnackbar,
    ]
  );

  const switchNetwork = useCallback(
    (chainId: number) => {
      if (isConnected && typeof _switchNetwork === 'function') {
        return _switchNetwork(chainId);
      }
      return switchNetworkLocal(chainId);
    },
    [_switchNetwork, isConnected, switchNetworkLocal]
  );

  const canSwitch = useMemo(
    () =>
      isConnected
        ? !!_switchNetworkAsync &&
          connector.id !== ConnectorNames.WalletConnect &&
          !(
            typeof window !== 'undefined' &&
            // @ts-ignore // TODO: add type later
            (window.ethereum?.isSafePal || window.ethereum?.isMathWallet)
          )
        : true,
    [_switchNetworkAsync, isConnected, connector]
  );

  return {
    ...switchNetworkArgs,
    switchNetwork,
    switchNetworkAsync,
    isLoading,
    canSwitch,
  };
}
