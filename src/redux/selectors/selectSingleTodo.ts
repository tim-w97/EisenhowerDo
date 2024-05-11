import {RootState} from '../types/rootState.ts';

export default function (todoID: string) {
  return (state: RootState) =>
    state.todos.todos.find(todo => todo.id === todoID);
}
