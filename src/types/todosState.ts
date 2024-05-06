import Todo from './todo.ts';

type TodosState = {
  todos: Todo[];
  status: 'loading' | 'idle';
  error: string | null;
};

export default TodosState;
