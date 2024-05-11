import {RootState} from '../types/rootState.ts';

export default function () {
  return (state: RootState) => state.user.token;
}
