import {TodosState} from '../../types/todosState.ts';
import {PayloadAction} from '@reduxjs/toolkit';

export default function setTodoSharedStatus(
  state: TodosState,
  action: PayloadAction<boolean>,
) {
  state.todoSharedSuccessfully = action.payload;
}
