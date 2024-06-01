import {TodosState} from '../../types/todosState.ts';
import {PayloadAction} from '@reduxjs/toolkit';
import {PendingTodo} from '../../types/dtos/pendingTodo.ts';

export default function setPendingTodo(
  state: TodosState,
  action: PayloadAction<PendingTodo>,
) {
  state.pendingTodo = action.payload;
}
