import {createAsyncThunk} from '@reduxjs/toolkit';
import {Todo} from '../../types/todo.ts';
import Config from 'react-native-config';
import {RootState} from '../types/rootState.ts';
import createAuthorizationHeader from '../../utils/createAuthorizationHeader.ts';

export default createAsyncThunk(
  // This argument is the action name
  'todos/fetch',

  // This function contains async logic of a side effect
  async (_, thunkAPI) => {
    const url = `${Config.API_URL}/todos`;

    const token = (thunkAPI.getState() as RootState).user.token;

    if (!token) {
      return thunkAPI.rejectWithValue('Kein Token vorhanden');
    }

    const response = await fetch(url, {
      headers: createAuthorizationHeader(token),
    });

    if (response.status !== 200) {
      const {message} = await response.json();
      return thunkAPI.rejectWithValue(message);
    }

    const todos: Todo[] = await response.json();

    return todos;
  },
);
