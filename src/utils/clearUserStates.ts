import { PREDICTION_TOOLTIP_DISMISS_KEY } from '@/config/constants';
import { resetUserState } from '@/state/global/actions';
import { Dispatch } from '@reduxjs/toolkit';
import { ChainId } from '@sdk';

export const clearUserStates = (
  dispatch: Dispatch<any>,
  {
    chainId,
    newChainId,
  }: {
    chainId?: ChainId;
    newChainId?: ChainId;
  }
) => {
  dispatch(resetUserState({ chainId, newChainId }));
  window?.localStorage?.removeItem(PREDICTION_TOOLTIP_DISMISS_KEY);
};
