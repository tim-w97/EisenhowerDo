import {UserState} from '../../types/userState.ts';

export default function logout(state: UserState) {
  state.credentials.username = 'lisa';
  state.credentials.password = 'check';

  state.token = null;
  state.error = null;
  state.status = 'idle';
}
