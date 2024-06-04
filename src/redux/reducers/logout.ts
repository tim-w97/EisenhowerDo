import {UserState} from '../../types/userState.ts';
import Config from 'react-native-config';

export default function logout(state: UserState) {
  state.credentials.username = Config.PREFILLED_USERNAME ?? '';
  state.credentials.password = Config.PREFILLED_PASSWORD ?? '';

  state.token = null;
  state.error = null;
  state.status = 'idle';
}
