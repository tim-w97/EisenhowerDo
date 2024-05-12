import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers/rootReducer.ts';

export const store = configureStore({
  reducer: rootReducer,
});
