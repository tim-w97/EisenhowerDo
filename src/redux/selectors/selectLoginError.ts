import {RootState} from '../types/rootState.ts';

export default function selectLoginError() {
  return (state: RootState) => state.user.error;
}
