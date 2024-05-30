import {RootState} from '../types/rootState.ts';

export default function selectLastTappedTodo() {
  return (state: RootState) => state.todos.lastTappedTodo;
}
