import { HttpMethod } from '@/constants';
import { apiClient } from '@/http';
import {
  MintMysteryBoxPayload,
  MintWeaponFromMysteryBoxPayload,
} from '@/types/api/payload/mint';
import { MintWeaponFromMysteryBoxResponse } from '@/types/api/response/mint';

export const mintMysteryBox = (payload: MintMysteryBoxPayload) => {
  return apiClient('/mint/mystery-box', HttpMethod.POST, payload);
};

export const mintWeaponFromMysteryBox = (
  payload: MintWeaponFromMysteryBoxPayload
) => {
  return apiClient<MintWeaponFromMysteryBoxResponse>(
    '/mint/weapon/from-mystery-box',
    HttpMethod.POST,
    payload
  );
};
