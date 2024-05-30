import {RootState} from '../types/rootState.ts';

export default function selectTemporaryData() {
  return (state: RootState) => state.todos.temporaryData;
}
