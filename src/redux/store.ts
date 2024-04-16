import {configureStore} from '@reduxjs/toolkit';
import todosSlice from './todosSlice.ts';

const store = configureStore({
  reducer: todosSlice.reducer,
});

export default store;
