import {Todo} from './todo.ts';
import {TodoDTO} from './dtos/todoDTO.ts';

export type TodosState = {
  todos: Todo[];
  status: 'loading' | 'idle';
  error: string | null;
  lastTappedTodo: number;

  temporaryData: TodoDTO;
};
