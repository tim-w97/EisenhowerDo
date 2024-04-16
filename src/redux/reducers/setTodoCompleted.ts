import {PayloadAction} from '@reduxjs/toolkit';
import TodoStatus from '../../types/todoStatus.ts';
import TodosState from '../../types/todosState.ts';

function setTodoCompleted(
  state: TodosState,
  action: PayloadAction<TodoStatus>,
) {
  const updatedTodos = state.todos.map(todo =>
    todo.id === action.payload.todoID
      ? {...todo, isCompleted: action.payload.isCompleted}
      : todo,
  );

  state.todos = [...updatedTodos];
}

export default setTodoCompleted;
