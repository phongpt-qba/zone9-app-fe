import { ModalType } from '@/config/constants';
import { createAction } from '@reduxjs/toolkit';
import { ChainId } from '@sdk';

// fired once when the app reloads but before the app renders
// allows any updates to be applied to store data loaded from localStorage
export const updateVersion = createAction<void>('global/updateVersion');

export const resetUserState = createAction<{
  chainId?: ChainId;
  newChainId?: ChainId;
}>('global/resetUserState');

export const openModal = createAction<{ type: ModalType; props: any }>(
  'global/openModal'
);

export const closeModal = createAction('global/closeModal');
