import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {RootState} from '../types/rootState.ts';
import createAuthorizationHeader from '../../utils/createAuthorizationHeader.ts';
import {SharedTodo} from '../../types/dtos/sharedTodo.ts';

export default createAsyncThunk(
  // This argument is the action name
  'todos/share',

  // This function contains async logic of a side effect
  async (sharedTodo: SharedTodo, thunkAPI) => {
    const url = `${Config.API_URL}/todos/${sharedTodo.todoID}/share`;

    const token = (thunkAPI.getState() as RootState).user.token;

    if (!token) {
      return thunkAPI.rejectWithValue('Kein Token vorhanden');
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: createAuthorizationHeader(token),
        body: JSON.stringify(sharedTodo),
      });

      if (response.status !== 200) {
        const {message} = await response.json();
        return thunkAPI.rejectWithValue(message);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Ein Netzwerkfehler ist aufgetreten');
    }
  },
);
