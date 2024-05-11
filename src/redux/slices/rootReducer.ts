import {combineSlices} from '@reduxjs/toolkit';
import todosSlice from './todosSlice.ts';
import userSlice from './userSlice.ts';

export const rootReducer = combineSlices(userSlice, todosSlice);
