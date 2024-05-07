import {configureStore} from '@reduxjs/toolkit';
import todosSlice from './slices/todosSlice.ts';

export const store = configureStore({
  reducer: todosSlice.reducer,
});
