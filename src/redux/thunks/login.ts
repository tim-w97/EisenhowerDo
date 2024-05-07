import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';

export const login = createAsyncThunk(
  // This argument is the action name
  'user/login',

  // This function contains async logic of a side effect
  async (_, thunkAPI) => {
    const url = `${Config.API_URL}/login`;

    const response = await fetch(url);

    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(response.statusText);
    }

    const {token} = await response.json();

    return token;
  },
);
