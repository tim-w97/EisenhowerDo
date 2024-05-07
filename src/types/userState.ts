type UserState = {
  token: string | null;
  status: 'loading' | 'idle';
  error: string | null;
};

export default UserState;
