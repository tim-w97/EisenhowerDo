import {Todo} from './todo.ts';
import {TemporaryData} from './temporaryData.ts';

export type TodosState = {
  todos: Todo[];
  status: 'loading' | 'idle';
  error: string | null;

  temporaryData: TemporaryData;
};
