import {TodosState} from '../../types/todosState.ts';
import {PayloadAction} from '@reduxjs/toolkit';

export default function setUserToShareTodoWith(
  state: TodosState,
  action: PayloadAction<string>,
) {
  state.userToShareTodoWith = action.payload;
}
