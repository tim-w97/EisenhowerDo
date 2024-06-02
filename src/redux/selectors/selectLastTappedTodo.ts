import {RootState} from '../types/rootState.ts';

export default function selectLastTappedTodo() {
  return (state: RootState) => {
    const lastTappedTodo = state.todos.lastTappedTodo;

    if (!lastTappedTodo) {
      throw 'No todo was tapped!';
    }

    return lastTappedTodo;
  };
}
