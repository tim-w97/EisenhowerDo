import TodosState from '../../types/todosState.ts';

export default function (todoID: string) {
  return (state: TodosState) => state.todos.find(todo => todo.id === todoID);
}
