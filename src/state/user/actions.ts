import { createAction } from '@reduxjs/toolkit';
import { UserDataResponse } from 'myria-core-sdk/dist/types';

export const setMyriaUser = createAction<UserDataResponse>('user/setMyriaUser');
