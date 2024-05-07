import {configureStore} from '@reduxjs/toolkit';
import todosSlice from './todosSlice.ts';

export const store = configureStore({
  reducer: todosSlice.reducer,
});
