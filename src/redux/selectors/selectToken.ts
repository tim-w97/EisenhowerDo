import {RootState} from '../types/rootState.ts';

export default function selectToken() {
  return (state: RootState) => state.user.token;
}
