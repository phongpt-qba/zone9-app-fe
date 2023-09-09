import { CollectionManager, TransactionManager } from 'myria-core-sdk';
import { useEffect, useState } from 'react';
import useMyriaModuleFactory from './useMyriaModuleFactory';

const useMyriaCollectionManager = () => {
  const myriaModuleFactory = useMyriaModuleFactory();
  const [manager, setManager] = useState<CollectionManager>(
    myriaModuleFactory.getCollectionManager()
  );

  useEffect(() => {
    if (!myriaModuleFactory || manager) {
      return;
    }

    setManager(myriaModuleFactory.getCollectionManager());
  }, [manager, myriaModuleFactory]);

  return manager;
};

export default useMyriaCollectionManager;
