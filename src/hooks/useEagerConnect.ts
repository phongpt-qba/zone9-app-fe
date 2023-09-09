import { CHAINS } from '@/config/chains';
import { useEffect } from 'react';
import { useAccount, useConfig, useConnect } from 'wagmi';
import useAuth from './useAuth';

const useEagerConnect = () => {
  const config = useConfig();
  const { address: account } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { loginMyria } = useAuth();

  useEffect(() => {
    if (
      !(typeof window === 'undefined') &&
      window?.parent !== window &&
      // @ts-ignore
      !window.cy
    ) {
      import('wagmi/connectors/safe').then(({ SafeConnector }) => {
        const safe = new SafeConnector({ chains: CHAINS });

        connectAsync({ connector: safe }).catch(() => {
          config.autoConnect();
        });
      });
    } else {
      config.autoConnect();
    }
  }, [config, connectAsync, connectors]);

  useEffect(() => {
    loginMyria();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);
};

export default useEagerConnect;
