import {RootState} from '../types/rootState.ts';
import {Todo} from '../../types/todo.ts';

export default function (todoID: number) {
  return (state: RootState) =>
    state.todos.todos.find((todo: Todo) => todo.id === todoID);
}
