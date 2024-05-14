import {UserState} from '../../types/userState.ts';

export default function clearCredentials(state: UserState) {
  state.credentials.username = '';
  state.credentials.password = '';
}
