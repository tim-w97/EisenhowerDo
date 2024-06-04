import {RootState} from '../types/rootState.ts';

export default function selectAllTodos() {
  return (state: RootState) => state.todos.todos;
}
