import {RootState} from '../types/rootState.ts';

export default function selectTodoData() {
  return (state: RootState) => state.todos.temporaryData;
}
