import {PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../../types/userState.ts';
import {Credentials} from '../../types/dtos/credentials.ts';

export default function setCredentials(
  state: UserState,
  action: PayloadAction<Credentials>,
) {
  state.credentials = action.payload;
}
