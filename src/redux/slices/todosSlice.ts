import {createSlice} from '@reduxjs/toolkit';
import {TodosState} from '../../types/todosState.ts';
import fetchTodos from '../thunks/fetchTodos.ts';
import addTodo from '../thunks/addTodo.ts';
import deleteTodo from '../thunks/deleteTodo.ts';
import shareTodo from '../thunks/shareTodo.ts';
import pendingReducer from '../reducers/pendingReducer.ts';
import errorReducer from '../reducers/errorReducer.ts';
import setPendingTodo from '../reducers/setPendingTodo.ts';
import clearPendingTodo from '../reducers/clearPendingTodo.ts';
import setLastTappedTodo from '../reducers/setLastTappedTodo.ts';
import setUserToShareTodoWith from '../reducers/setUserToShareTodoWith.ts';
import clearUserToShareTodoWith from '../reducers/clearUserToShareTodoWith.ts';
import setTodoSharedStatus from '../reducers/setTodoSharedStatus.ts';

export default createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
    lastTappedTodo: 0,
    pendingTodo: {
      title: '',
      text: '',
      isImportant: false,
      isUrgent: false,
    },
    userToShareTodoWith: '',
    todoSharedSuccessfully: false,
  } as TodosState,
  reducers: {
    setLastTappedTodo,
    setPendingTodo,
    clearPendingTodo,
    setUserToShareTodoWith,
    clearUserToShareTodoWith,
    setTodoSharedStatus,
  },
  extraReducers: builder => {
    // pending cases
    builder.addCase(fetchTodos.pending, pendingReducer);
    builder.addCase(addTodo.pending, pendingReducer);
    builder.addCase(deleteTodo.pending, pendingReducer);
    builder.addCase(shareTodo.pending, pendingReducer);

    // error cases
    builder.addCase(addTodo.rejected, errorReducer);
    builder.addCase(fetchTodos.rejected, errorReducer);
    builder.addCase(deleteTodo.rejected, errorReducer);
    builder.addCase(shareTodo.rejected, errorReducer);

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

    builder.addCase(shareTodo.fulfilled, (state, action) => {
      state.status = 'idle';
      state.error = null;
      state.todoSharedSuccessfully = action.payload;
    });
  },
});
