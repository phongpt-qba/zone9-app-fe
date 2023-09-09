import { TransactionManager } from 'myria-core-sdk';
import { useEffect, useState } from 'react';
import useMyriaModuleFactory from './useMyriaModuleFactory';

const useMyriaTransactionManager = () => {
  const myriaModuleFactory = useMyriaModuleFactory();
  const [transactionManager, setTransactionManager] =
    useState<TransactionManager>(myriaModuleFactory.getTransactionManager());

  useEffect(() => {
    if (!myriaModuleFactory || transactionManager) {
      return;
    }

    setTransactionManager(myriaModuleFactory.getTransactionManager());
  }, [myriaModuleFactory, transactionManager]);

  return transactionManager;
};

export default useMyriaTransactionManager;
