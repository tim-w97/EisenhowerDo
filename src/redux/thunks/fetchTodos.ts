import {createAsyncThunk} from '@reduxjs/toolkit';
import Todo from '../../types/todo.ts';
import Config from 'react-native-config';

export const fetchTodos = createAsyncThunk(
  // This argument is the action name
  'todos/fetch',

  // This function contains async logic of a side effect
  async (_, thunkAPI) => {
    const url = `${Config.API_URL}/todos`;

    // TODO: need auth first
    const response = await fetch(url);

    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(response.statusText);
    }

    const todos: Todo[] = await response.json();

    return todos;
  },
);