import {TodosState} from '../../types/todosState.ts';

export default function clearTodos(state: TodosState) {
  state.todos = [];
  state.sharedTodos = [];
}
