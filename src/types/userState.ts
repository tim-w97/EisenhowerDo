import {CredentialsDTO} from './dtos/credentialsDTO.ts';

export type UserState = {
  credentials: CredentialsDTO;

  token: string | null;
  status: 'loading' | 'idle';
  error: string | null;
};
