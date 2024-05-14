import {TodosState} from '../../types/todosState.ts';

export default function clearTodoData(state: TodosState) {
  state.temporaryData.title = '';
  state.temporaryData.text = '';
  state.temporaryData.isImportant = false;
  state.temporaryData.isUrgent = false;
}
