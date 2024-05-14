import {PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../../types/userState.ts';
import {CredentialsDTO} from '../../types/dtos/credentialsDTO.ts';

export default function setCredentials(
  state: UserState,
  action: PayloadAction<CredentialsDTO>,
) {
  state.credentials = action.payload;
}
