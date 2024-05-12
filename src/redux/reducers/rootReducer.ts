import {combineSlices} from '@reduxjs/toolkit';
import todosSlice from '../slices/todosSlice.ts';
import userSlice from '../slices/userSlice.ts';

export default combineSlices(userSlice, todosSlice);
