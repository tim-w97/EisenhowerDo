import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {CredentialsDTO} from '../../types/dtos/credentialsDTO.ts';

export default createAsyncThunk(
  // This argument is the action name
  'user/login',

  // This function contains async logic of a side effect
  async (credentials: CredentialsDTO, thunkAPI) => {
    const url = `${Config.API_URL}/login`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      if (response.status !== 200) {
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
