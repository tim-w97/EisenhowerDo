import {RootState} from '../types/rootState.ts';

export default function selectUserToShareTodoWith() {
  return (state: RootState) => state.todos.userToShareTodoWith;
}
