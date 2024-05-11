import {createSlice} from '@reduxjs/toolkit';
//import initialTodos from '../sampleData/initialTodos.ts';
import TodosState from '../../types/todosState.ts';
import addTodo from '../reducers/addTodo.ts';
import setTodoCompleted from '../reducers/setTodoCompleted.ts';
import {fetchTodos} from '../thunks/fetchTodos.ts';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  } as TodosState,
  reducers: {
    addTodo,
    setTodoCompleted,
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, state => {
      // change status to loading and clear previous errors
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = 'idle';
      state.todos.push(...action.payload);
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      if (action.payload) {
        state.status = 'idle';
        state.error = action.payload as string;
      }
    });
  },
});

export default todosSlice;
