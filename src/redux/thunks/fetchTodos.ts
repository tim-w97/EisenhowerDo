import {createAsyncThunk} from '@reduxjs/toolkit';
import Todo from '../../types/todo.ts';
import Config from 'react-native-config';
import initialTodos from '../../sampleData/initialTodos.ts';

export const fetchTodos = createAsyncThunk(
  // This argument is the action name
  'todos/fetch',

  // This function contains async logic of a side effect
  async (_, thunkAPI) => {
    // TODO: need auth first
    // const response = await fetch(`${Config.API_URL}/todos`);

    // if (response.status !== 200) {
    //   return thunkAPI.rejectWithValue(response.statusText);
    // }

    // for testing
    await new Promise(r => setTimeout(r, 2000));

    const todos: Todo[] = initialTodos;

    return todos;
  },
);
