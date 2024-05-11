import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './slices/rootReducer.ts';

export const store = configureStore({
  reducer: rootReducer,
});
