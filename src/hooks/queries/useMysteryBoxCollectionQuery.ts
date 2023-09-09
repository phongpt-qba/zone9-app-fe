import useMyriaCollectionManager from '../useMyriaCollectionManager';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useMysteryBoxCollectionQuery = (options?: QueryOptions) => {
  const collectionManager = useMyriaCollectionManager();

  const queryFn = () =>
    collectionManager.getCollectionById(
      Number(process.env.NEXT_PUBLIC_MYSTERY_BOX_COLLECTION_ID!)
    );

  return useQuery(['mystery-box-collection'], queryFn, {
    ...options,
  });
};

export default useMysteryBoxCollectionQuery;
