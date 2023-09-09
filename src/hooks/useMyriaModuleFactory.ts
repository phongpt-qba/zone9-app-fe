import { EnvTypes, ModuleFactory, MyriaClient, Network } from 'myria-core-sdk';
import { useState } from 'react';
import Web3 from 'web3';

const useMyriaModuleFactory = () => {
  const [myriaModuleFactory] = useState<ModuleFactory>(
    ModuleFactory.getInstance(
      new MyriaClient({
        provider: window?.web3?.currentProvider,
        networkId:
          process.env.NEXT_PUBLIC_ENVIROMENT !== 'production'
            ? Network.GOERLI
            : Network.MAINNET,
        web3: new Web3(window?.web3?.currentProvider) as any,
        env:
          process.env.NEXT_PUBLIC_ENVIROMENT !== 'production'
            ? EnvTypes.STAGING
            : EnvTypes.PRODUCTION,
      })
    )
  );

  return myriaModuleFactory;
};

export default useMyriaModuleFactory;
