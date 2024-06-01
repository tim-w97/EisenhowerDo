import {TodosState} from '../../types/todosState.ts';

export default function clearPendingTodo(state: TodosState) {
  state.pendingTodo.title = '';
  state.pendingTodo.text = '';
  state.pendingTodo.isImportant = false;
  state.pendingTodo.isUrgent = false;
}
