import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Todo from '../types/todo.ts';
import initialTodos from '../sampleData/initialTodos.ts';
import TodosState from '../types/todosState.ts';
import TodoStatus from '../types/todoStatus.ts';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {todos: initialTodos} as TodosState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    updateTodoCompleted: (state, action: PayloadAction<TodoStatus>) => {
      const updatedTodos = state.todos.map((todo: Todo) => {
        if (todo.id === action.payload.todoID) {
          return {...todo, isCompleted: action.payload.isCompleted};
        }

        return todo;
      });

      state.todos = [...updatedTodos];
    },
  },
});

export default todosSlice;
export const {addTodo, updateTodoCompleted} = todosSlice.actions;
