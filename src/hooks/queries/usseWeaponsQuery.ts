import { getWeapons } from '@/services/weapon';
import { GetWeaponsPayload } from '@/types/api/payload/weapon';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useWeaponsQuery = (
  payload: GetWeaponsPayload,
  options?: QueryOptions
) => {
  const queryFn = () => getWeapons(payload);

  return useQuery(['weapons', payload], queryFn, {
    enabled: !!payload?.walletAddress,
    ...options,
  });
};

export default useWeaponsQuery;
