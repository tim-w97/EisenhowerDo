import {createSlice} from '@reduxjs/toolkit';
import TodosState from '../../types/todosState.ts';
import {fetchTodos} from '../thunks/fetchTodos.ts';
import {addTodo} from '../thunks/addTodo.ts';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  } as TodosState,
  reducers: {},
  extraReducers: builder => {
    // Fetch Todos
    builder.addCase(fetchTodos.pending, state => {
      // change status to loading and clear previous errors
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = 'idle';
      state.todos = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      if (action.payload) {
        state.status = 'idle';
        state.error = action.payload as string;
      }
    });

    // Add a new Todo
    builder.addCase(addTodo.pending, state => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(addTodo.fulfilled, state => {
      state.status = 'idle';
      state.error = null;
    });

    builder.addCase(addTodo.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload as string;
    });
  },
});

export default todosSlice;
