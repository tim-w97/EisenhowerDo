import {SafeAreaView} from 'react-native';
import React from 'react';
import TodoListEntry from '../views/TodoListEntry.tsx';
import dummyTodos from '../sampleData/dummyTodos.json';

function MyTodosScreen() {
  return (
    <SafeAreaView>
      {dummyTodos.map(todo => (
        <TodoListEntry key={todo.id} todo={todo} />
      ))}
    </SafeAreaView>
  );
}

export default MyTodosScreen;
