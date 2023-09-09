import { CHAINS } from '@/config/chains';
import { PUBLIC_NODES } from '@/config/nodes';
import { configureChains, createConfig, createStorage } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { ChainId } from '@sdk';
import { memoize } from 'lodash';
import { InjectedConnector } from 'wagmi/connectors/injected';

const mostNodesConfig = Object.values(PUBLIC_NODES).reduce((prev, cur) => {
  return cur.length > prev ? cur.length : prev;
}, 0);

export const { publicClient, chains } = configureChains(
  CHAINS,
  Array.from({ length: mostNodesConfig })
    .map((_, i) => i)
    .map((i) => {
      return jsonRpcProvider({
        rpc: (chain) => {
          if (
            process.env.NODE_ENV === 'test' &&
            chain.id === mainnet.id &&
            i === 0
          ) {
            return { http: 'https://cloudflare-eth.com' };
          }

          return PUBLIC_NODES[chain.id as ChainId]?.[i]
            ? {
                http: PUBLIC_NODES[chain.id as ChainId][i],
              }
            : null;
        },
      });
    }),
  {
    batch: {
      multicall: {
        batchSize: 1024 * 200,
      },
    },
  }
);

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
});

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
});

export const noopStorage = {
  getItem: (_key: string) => '',
  setItem: (_key: string, _value: string) => null,
  removeItem: (_key: string) => null,
};

export const wagmiConfig = createConfig({
  storage: createStorage({
    storage: typeof window !== 'undefined' ? window.localStorage : noopStorage,
    key: 'wagmi_v1.1',
  }),
  autoConnect: true,
  publicClient,
  connectors: [injectedConnector, metaMaskConnector],
});

export const CHAIN_IDS = chains.map((c) => c.id);

export const isChainSupported = memoize((chainId: number) =>
  (CHAIN_IDS as number[]).includes(chainId)
);
