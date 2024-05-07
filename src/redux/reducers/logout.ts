import UserState from '../../types/userState.ts';

function logout(state: UserState) {
  state.token = null;
  state.error = null;
  state.status = 'idle';
}

export default logout;
