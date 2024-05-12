import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer.ts';

export default configureStore({
  reducer: rootReducer,
});
