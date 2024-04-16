import {PayloadAction} from '@reduxjs/toolkit';
import Todo from '../../types/todo.ts';
import TodosState from '../../types/todosState.ts';

function addTodo(state: TodosState, action: PayloadAction<Todo>) {
  state.todos = [...state.todos, action.payload];
}

export default addTodo;
