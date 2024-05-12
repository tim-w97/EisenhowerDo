import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../types/userState.ts';
import logout from '../reducers/logout.ts';
import login from '../thunks/login.ts';
import pendingReducer from '../reducers/pendingReducer.ts';
import errorReducer from '../reducers/errorReducer.ts';
import register from '../thunks/register.ts';

export default createSlice({
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
    // pending cases
    builder.addCase(login.pending, pendingReducer);
    builder.addCase(register.pending, pendingReducer);

    // error cases
    builder.addCase(login.rejected, errorReducer);
    builder.addCase(register.rejected, errorReducer);

    // fulfilled cases
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'idle';
      state.token = action.payload;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.status = 'idle';
      state.token = action.payload;
    });
  },
});
