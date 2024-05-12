import UserState from '../../types/userState.ts';
import TodosState from '../../types/todosState.ts';
import {PayloadAction} from '@reduxjs/toolkit';

export default function errorReducer(
  state: UserState | TodosState,
  action: PayloadAction<any>,
) {
  state.status = 'idle';
  state.error = action.payload;
}
