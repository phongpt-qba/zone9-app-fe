import { HttpMethod } from '@/constants';
import { apiClient } from '@/http';
import { GetMysteryBoxesPayload } from '@/types/api/payload/box';
import { GetMysteryBoxesResponse } from '@/types/api/response/box';

export const getMysteryBoxes = (payload: GetMysteryBoxesPayload) => {
  return apiClient<GetMysteryBoxesResponse>(
    '/inventories/mystery-boxes',
    HttpMethod.GET,
    payload
  );
};

export const getOpenedMysteryBoxesCount = () => {
  return apiClient<number>('/mystery-boxes/opened-count', HttpMethod.GET);
};
