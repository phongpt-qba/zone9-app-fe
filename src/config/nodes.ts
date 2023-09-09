import { getNodeRealUrl } from '@/utils/nodeReal';
import { ChainId } from '@sdk';

export const PUBLIC_NODES = {
  [ChainId.BSC]: [
    getNodeRealUrl(ChainId.BSC, process.env.NEXT_PUBLIC_NODE_REAL_API_ETH),
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed1.binance.org',
  ].filter(Boolean),
  [ChainId.BSC_TESTNET]: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  [ChainId.ETHEREUM]: [
    getNodeRealUrl(ChainId.ETHEREUM, process.env.NEXT_PUBLIC_NODE_REAL_API_ETH),
    'https://eth.llamarpc.com',
    'https://cloudflare-eth.com',
  ].filter(Boolean),
  [ChainId.GOERLI]: [
    getNodeRealUrl(
      ChainId.GOERLI,
      process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI
    ),
    'https://eth-goerli.public.blastapi.io',
  ].filter(Boolean),
} satisfies Record<ChainId, string[]>;
