import {RootState} from '../types/rootState.ts';
import {Todo} from '../../types/todo.ts';

export default function selectLastTappedTodo() {
  return (state: RootState) => {
    const foundTodo = state.todos.todos.find(
      (todo: Todo) => todo.id === state.todos.lastTappedTodo,
    );

    if (!foundTodo) {
      throw new Error(
        `Todo with id ${state.todos.lastTappedTodo} doesn't exist.`,
      );
    }

    return foundTodo;
  };
}
