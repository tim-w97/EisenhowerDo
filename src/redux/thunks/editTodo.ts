import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {RootState} from '../types/rootState.ts';
import createAuthorizationHeader from '../../utils/createAuthorizationHeader.ts';
import {Todo} from '../../types/todo.ts';

export default createAsyncThunk(
  // This argument is the action name
  'todos/edit',

  // This function contains async logic of a side effect
  async (todo: Todo, thunkAPI) => {
    const url = `${Config.API_URL}/todos/${todo.id}`;

    const token = (thunkAPI.getState() as RootState).user.token;

    if (!token) {
      return thunkAPI.rejectWithValue('Kein Token vorhanden');
    }

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: createAuthorizationHeader(token),
        body: JSON.stringify(todo),
      });

      if (response.status !== 200) {
        const {message} = await response.json();
        return thunkAPI.rejectWithValue(message);
      }

      return todo;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Ein Netzwerkfehler ist aufgetreten');
    }
  },
);
