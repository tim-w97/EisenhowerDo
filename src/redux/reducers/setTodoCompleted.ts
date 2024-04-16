import {PayloadAction} from '@reduxjs/toolkit';
import TodoStatus from '../../types/todoStatus.ts';
import Todo from '../../types/todo.ts';
import TodosState from '../../types/todosState.ts';

function setTodoCompleted(
  state: TodosState,
  action: PayloadAction<TodoStatus>,
) {
  const updatedTodos: Todo[] = state.todos.map((todo: Todo) => {
    if (todo.id === action.payload.todoID) {
      return {...todo, isCompleted: action.payload.isCompleted};
    }

    return todo;
  });

  state.todos = [...updatedTodos];
}

export default setTodoCompleted;
