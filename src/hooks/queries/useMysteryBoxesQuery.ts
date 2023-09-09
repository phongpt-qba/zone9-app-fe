import { getMysteryBoxes } from '@/services/box';
import { GetMysteryBoxesPayload } from '@/types/api/payload/box';
import { GetMysteryBoxesResponse } from '@/types/api/response/box';
import useQuery from './useQuery';

const useMysteryBoxesQuery = (
  payload: GetMysteryBoxesPayload,
  options?: Parameters<typeof useQuery<GetMysteryBoxesResponse>>[2]
) => {
  const queryFn = () => getMysteryBoxes(payload);

  return useQuery(['mystery-boxes', payload], queryFn, {
    enabled: !!payload?.walletAddress,
    ...options,
  });
};

export default useMysteryBoxesQuery;
