import {TodosState} from '../../types/todosState.ts';
import {PayloadAction} from '@reduxjs/toolkit';

export default function setLastTappedTodo(
  state: TodosState,
  action: PayloadAction<number>,
) {
  state.lastTappedTodo = action.payload;
}
