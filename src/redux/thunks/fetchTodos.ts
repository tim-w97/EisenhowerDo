import {createAsyncThunk} from '@reduxjs/toolkit';
import Todo from '../../types/todo.ts';
import Config from 'react-native-config';

export const fetchTodos = createAsyncThunk(
  // This argument is the action name
  'todos/fetch',

  // This function contains async logic of a side effect
  async (_, {rejectWithValue, fulfillWithValue}) => {
    const response = await fetch(Config.API_URL);

    if (response.status !== 200) {
      return rejectWithValue(response.statusText);
    }

    const todos: Todo[] = await response.json();

    return fulfillWithValue(todos);
  },
);
