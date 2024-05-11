import {createSlice} from '@reduxjs/toolkit';
import UserState from '../../types/userState.ts';
import logout from '../reducers/logout.ts';
import {login} from '../thunks/login.ts';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    error: null,
    status: 'idle',
  } as UserState,
  reducers: {
    logout,
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      // change status to loading and clear previous errors
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'idle';
      state.token = action.payload;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.status = 'idle';

      if (action.payload) {
        state.error = action.payload as string;
      }
    });
  },
});

export default userSlice;
