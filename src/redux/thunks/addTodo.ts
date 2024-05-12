import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {RootState} from '../types/rootState.ts';
import {TodoDTO} from '../../types/dtos/todoDTO.ts';

export default createAsyncThunk(
  // This argument is the action name
  'todos/add',

  // This function contains async logic of a side effect
  async (todo: TodoDTO, thunkAPI) => {
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

    if (response.status !== 201) {
      return thunkAPI.rejectWithValue(response.statusText);
    }

    return todo;
  },
);
