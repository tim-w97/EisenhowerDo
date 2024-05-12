import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {RootState} from '../types/rootState.ts';

export default createAsyncThunk(
  // This argument is the action name
  'categories/fetch',

  // This function contains async logic of a side effect
  async (_, thunkAPI) => {
    const url = `${Config.API_URL}/todos`;

    const {user} = thunkAPI.getState() as RootState;

    const headers = {
      Authorization: `Bearer ${user.token}`,
    };

    // TODO: implement me
  },
);
