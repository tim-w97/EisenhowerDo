import {RootState} from '../types/rootState.ts';

export default function selectLoginStatus() {
  return (state: RootState) => state.user.status;
}
