import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {RootState} from '../types/rootState.ts';
import {TodoDTO} from '../../types/dtos/todoDTO.ts';
import createAuthorizationHeader from '../../utils/createAuthorizationHeader.ts';

export default createAsyncThunk(
  // This argument is the action name
  'todos/add',

  // This function contains async logic of a side effect
  async (todo: TodoDTO, thunkAPI) => {
    const url = `${Config.API_URL}/todos`;

    const token = (thunkAPI.getState() as RootState).user.token;

    if (!token) {
      return thunkAPI.rejectWithValue('Kein Token vorhanden');
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: createAuthorizationHeader(token),
      body: JSON.stringify(todo),
    });

    if (response.status !== 201) {
      const {message} = await response.json();
      return thunkAPI.rejectWithValue(message);
    }

    return todo;
  },
);
