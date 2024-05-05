import {createAsyncThunk} from '@reduxjs/toolkit';
import Todo from '../../types/todo.ts';

export const fetchTodos = createAsyncThunk(
  // This argument is the action name
  'todos/fetch',

  // This function contains async logic of a side effect
  async () => {
    const response = await fetch(process.env.API_URL);

    // TODO: Check if status isn't ok

    const todos: Todo[] = await response.json();

    return todos;
  },
);
