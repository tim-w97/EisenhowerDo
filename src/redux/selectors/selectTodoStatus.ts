import {RootState} from '../types/rootState.ts';

export default function selectTodoStatus() {
  return (state: RootState) => state.todos.status;
}
