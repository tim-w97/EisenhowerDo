import {RootState} from '../types/rootState.ts';

export default function selectPendingTodo() {
  return (state: RootState) => state.todos.pendingTodo;
}
