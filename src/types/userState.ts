import {Credentials} from './dtos/credentials.ts';

export type UserState = {
  credentials: Credentials;

  token: string | null;
  status: 'loading' | 'idle';
  error: string | null;
};
