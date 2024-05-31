import {Todo} from '../types/todo.ts';

function getPriorityOrder(todo: Todo) {
  if (todo.isImportant && todo.isUrgent) {
    return 1;
  }

  if (todo.isImportant && !todo.isUrgent) {
    return 2;
  }

  if (!todo.isImportant && todo.isUrgent) {
    return 3;
  }

  return 4;
}

export default function getSortedTodos(todos: Todo[]) {
  const sortedTodos = [...todos];

  sortedTodos.sort(
    (todo1, todo2) => getPriorityOrder(todo1) - getPriorityOrder(todo2),
  );

  return sortedTodos;
}
