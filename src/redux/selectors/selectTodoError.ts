import {RootState} from '../types/rootState.ts';

export default function () {
  return (state: RootState) => state.todos.error;
}
