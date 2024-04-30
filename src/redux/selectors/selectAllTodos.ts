import TodosState from '../../types/todosState.ts';

export default function () {
  return (state: TodosState) => state.todos;
}
