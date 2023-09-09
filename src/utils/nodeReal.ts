export const getNodeRealUrl = (chainId: number, key?: string) => {
  let host = null;

  switch (chainId) {
    case 1:
      if (key) {
        host = `eth-mainnet.nodereal.io/v1/${key}`;
      }
      break;
    case 5:
      if (key) {
        host = `eth-goerli.nodereal.io/v1/${key}`;
      }
      break;
    case 56:
      if (key) {
        host = `bsc-mainnet.nodereal.io/v1/${key}`;
      }
      break;
    default:
      host = null;
  }

  if (!host) {
    return '';
  }

  const url = `https://${host}`;
  return url;
};
