import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {CredentialsDTO} from '../../types/dtos/credentialsDTO.ts';

export const login = createAsyncThunk(
  // This argument is the action name
  'user/register',

  // This function contains async logic of a side effect
  async (credentials: CredentialsDTO, thunkAPI) => {
    const url = `${Config.API_URL}/register`;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(response.statusText);
    }

    const {token} = await response.json();

    return token;
  },
);