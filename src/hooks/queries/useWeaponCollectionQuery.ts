import useMyriaCollectionManager from '../useMyriaCollectionManager';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useWeaponCollectionQuery = (options?: QueryOptions) => {
  const collectionManager = useMyriaCollectionManager();

  const queryFn = () =>
    collectionManager.getCollectionById(
      Number(process.env.NEXT_PUBLIC_WEAPON_COLLECTION_ID!)
    );

  return useQuery(['myria-weapon-collection'], queryFn, {
    ...options,
  });
};

export default useWeaponCollectionQuery;
