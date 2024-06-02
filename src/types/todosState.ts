import {Todo} from './todo.ts';
import {PendingTodo} from './dtos/pendingTodo.ts';

export type TodosState = {
  todos: Todo[];
  sharedTodos: Todo[];
  status: 'loading' | 'idle';
  error: string | null;
  pendingTodo: PendingTodo;
  userToShareTodoWith: string;
  todoSharedSuccessfully: boolean;

  lastTappedTodo?: Todo;
};
