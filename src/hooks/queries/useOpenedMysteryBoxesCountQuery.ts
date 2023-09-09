import { getOpenedMysteryBoxesCount } from '@/services/box';
import useQuery from './useQuery';

const useOpenedMysteryBoxesCountQuery = (
  options?: Parameters<typeof useQuery<number>>[2]
) => {
  const queryFn = () => getOpenedMysteryBoxesCount();

  return useQuery(['opened-mystery-boxes-count'], queryFn, {
    ...options,
  });
};

export default useOpenedMysteryBoxesCountQuery;
