import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {Credentials} from '../../types/dtos/credentials.ts';

export default createAsyncThunk(
  // This argument is the action name
  'user/register',

  // This function contains async logic of a side effect
  async (credentials: Credentials, thunkAPI) => {
    const url = `${Config.API_URL}/register`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      if (response.status !== 201) {
        const {message} = await response.json();
        return thunkAPI.rejectWithValue(message);
      }

      const {token} = await response.json();
      return token;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Ein Netzwerkfehler ist aufgetreten');
    }
  },
);
