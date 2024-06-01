import {Todo} from './todo.ts';
import {PendingTodo} from './dtos/pendingTodo.ts';

export type TodosState = {
  todos: Todo[];
  status: 'loading' | 'idle';
  error: string | null;
  lastTappedTodo: number;
  pendingTodo: PendingTodo;
  userToShareTodoWith: string;
};
