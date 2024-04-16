import {createSlice} from '@reduxjs/toolkit';
import initialTodos from '../sampleData/initialTodos.ts';
import TodosState from '../types/todosState.ts';
import addTodo from './reducers/addTodo.ts';
import setTodoCompleted from './reducers/setTodoCompleted.ts';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {todos: initialTodos} as TodosState,
  reducers: {
    addTodo,
    setTodoCompleted,
  },
});

export default todosSlice;
