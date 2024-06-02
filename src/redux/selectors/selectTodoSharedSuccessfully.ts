import {RootState} from '../types/rootState.ts';

export default function selectTodoSharedSuccessfully() {
  return (state: RootState) => state.todos.todoSharedSuccessfully;
}
