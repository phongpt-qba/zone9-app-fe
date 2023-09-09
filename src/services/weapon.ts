import { HttpMethod } from '@/constants';
import { apiClient } from '@/http';
import { GetWeaponsPayload } from '@/types/api/payload/weapon';
import { GetWeaponsResponse } from '@/types/api/response/weapon';

export const getWeapons = (payload: GetWeaponsPayload) => {
  return apiClient<GetWeaponsResponse>(
    'inventories/weapons',
    HttpMethod.GET,
    payload
  );
};
