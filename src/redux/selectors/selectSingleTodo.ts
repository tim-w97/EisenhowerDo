import {RootState} from '../types/rootState.ts';

export default function (todoID: number) {
  return (state: RootState) =>
    state.todos.todos.find(todo => todo.id === todoID);
}
