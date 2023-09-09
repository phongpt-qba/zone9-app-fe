import { DeveloperAccountManager } from 'myria-core-sdk';
import { useEffect, useState } from 'react';
import useMyriaModuleFactory from './useMyriaModuleFactory';

const useDeveloperAccountManager = () => {
  const myriaModuleFactory = useMyriaModuleFactory();
  const [manager, setManager] = useState<DeveloperAccountManager>(
    myriaModuleFactory.getDeveloperAccountManager()
  );

  useEffect(() => {
    if (!myriaModuleFactory || manager) {
      return;
    }

    setManager(myriaModuleFactory.getDeveloperAccountManager());
  }, [manager, myriaModuleFactory]);

  return manager;
};

export default useDeveloperAccountManager;
