import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {RootState} from '../types/rootState.ts';

export default createAsyncThunk(
  // This argument is the action name
  'todos/delete',

  // This function contains async logic of a side effect
  async (todoID: number, thunkAPI) => {
    const url = `${Config.API_URL}/todos/${todoID}`;

    const {user} = thunkAPI.getState() as RootState;

    const headers = {
      Authorization: `Bearer ${user.token}`,
    };

    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (response.status !== 200) {
      const {message} = await response.json();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
