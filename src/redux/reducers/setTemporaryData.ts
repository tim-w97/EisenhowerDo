import {TodosState} from '../../types/todosState.ts';
import {PayloadAction} from '@reduxjs/toolkit';
import {TodoDTO} from '../../types/dtos/todoDTO.ts';

export default function setTemporaryData(
  state: TodosState,
  action: PayloadAction<TodoDTO>,
) {
  state.temporaryData = action.payload;
}
