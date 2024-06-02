import {RootState} from '../types/rootState.ts';

export default function selectTodoError() {
  return (state: RootState) => state.todos.error;
}
