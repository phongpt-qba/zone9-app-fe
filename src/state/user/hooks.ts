import { useSelector } from 'react-redux';
import { AppState } from '..';

export function useUserState() {
  return useSelector<AppState, AppState['user']>((state) => state.user);
}

export function useMyriaUserState() {
  return useSelector<AppState, AppState['user']['myriaUser']>(
    (state) => state.user.myriaUser
  );
}

export function useStarkKey() {
  return useSelector<AppState, AppState['user']['myriaUser']['starkKey']>(
    (state) => state.user.myriaUser?.starkKey
  );
}
