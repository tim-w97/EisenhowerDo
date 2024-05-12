import {Todo} from './todo.ts';

export type TodosState = {
  todos: Todo[];
  status: 'loading' | 'idle';
  error: string | null;
};
