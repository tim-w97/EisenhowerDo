import {RootState} from '../types/rootState.ts';

export default function selectCredentials() {
  return (state: RootState) => state.user.credentials;
}
