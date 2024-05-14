export type UserState = {
  username: string;
  password: string;

  token: string | null;
  status: 'loading' | 'idle';
  error: string | null;
};
