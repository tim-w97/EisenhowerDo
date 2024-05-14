import {TodosState} from '../../types/todosState.ts';
import {PayloadAction} from '@reduxjs/toolkit';
import {TemporaryData} from '../../types/temporaryData.ts';

export default function setTemporaryData(
  state: TodosState,
  action: PayloadAction<TemporaryData>,
) {
  state.temporaryData = action.payload;
}
