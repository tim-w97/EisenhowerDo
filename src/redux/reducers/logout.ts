import {UserState} from '../../types/userState.ts';

export default function logout(state: UserState) {
  state.token = null;
  state.error = null;
  state.status = 'idle';
}
