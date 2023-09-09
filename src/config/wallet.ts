export enum ConnectorNames {
  MetaMask = 'metaMask',
  Injected = 'injected',
  WalletConnect = 'walletConnectLegacy',
  BSC = 'bsc',
  Blocto = 'blocto',
  WalletLink = 'coinbaseWallet',
  Ledger = 'ledger',
  TrustWallet = 'trustWallet',
}

const isMetamaskInstalled = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  if (window.ethereum?.isMetaMask) {
    return true;
  }

  if (window.ethereum?.providers?.some((p) => p.isMetaMask)) {
    return true;
  }

  return false;
};
