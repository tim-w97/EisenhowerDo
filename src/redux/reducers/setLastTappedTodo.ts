import {TodosState} from '../../types/todosState.ts';
import {PayloadAction} from '@reduxjs/toolkit';
import {Todo} from '../../types/todo.ts';

export default function setLastTappedTodo(
  state: TodosState,
  action: PayloadAction<Todo>,
) {
  state.lastTappedTodo = action.payload;
}
