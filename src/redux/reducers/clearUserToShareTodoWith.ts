import {TodosState} from '../../types/todosState.ts';

export default function clearUserToShareTodoWith(state: TodosState) {
  state.userToShareTodoWith = '';
}
