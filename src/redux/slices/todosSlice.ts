import {createSlice} from '@reduxjs/toolkit';
import {TodosState} from '../../types/todosState.ts';
import fetchTodos from '../thunks/fetchTodos.ts';
import addTodo from '../thunks/addTodo.ts';
import deleteTodo from '../thunks/deleteTodo.ts';
import pendingReducer from '../reducers/pendingReducer.ts';
import errorReducer from '../reducers/errorReducer.ts';
import setTemporaryData from '../reducers/setTemporaryData.ts';
import clearTemporaryData from '../reducers/clearTemporaryData.ts';

export default createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
    temporaryData: {
      title: '',
      text: '',
      isImportant: false,
      isUrgent: false,
    },
  } as TodosState,
  reducers: {
    setTemporaryData,
    clearTemporaryData,
  },
  extraReducers: builder => {
    // pending cases
    builder.addCase(fetchTodos.pending, pendingReducer);
    builder.addCase(addTodo.pending, pendingReducer);
    builder.addCase(deleteTodo.pending, pendingReducer);

    // error cases
    builder.addCase(addTodo.rejected, errorReducer);
    builder.addCase(fetchTodos.rejected, errorReducer);
    builder.addCase(deleteTodo.rejected, errorReducer);

    // fulfilled cases
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = 'idle';
      state.todos = action.payload;
    });

    builder.addCase(addTodo.fulfilled, state => {
      state.status = 'idle';
      state.error = null;
    });

    builder.addCase(deleteTodo.fulfilled, state => {
      state.status = 'idle';
      state.error = null;
    });
  },
});
