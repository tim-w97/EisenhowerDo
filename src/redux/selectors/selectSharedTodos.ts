import {RootState} from '../types/rootState.ts';

export default function selectSharedTodos() {
  return (state: RootState) => state.todos.sharedTodos;
}
