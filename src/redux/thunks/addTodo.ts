import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {RootState} from '../types/rootState.ts';
import Todo from '../../types/todo.ts';

export const addTodo = createAsyncThunk(
  // This argument is the action name
  'todos/add',

  // This function contains async logic of a side effect
  async (todo: Todo, thunkAPI) => {
    const url = `${Config.API_URL}/todos`;

    const {user} = thunkAPI.getState() as RootState;

    const headers = {
      Authorization: `Bearer ${user.token}`,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(todo),
    });

    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(response.statusText);
    }

    return todo;
  },
);
