import {Text, View} from 'react-native';
import Todo from '../types/todo.ts';
import React from 'react';

type TodoListEntryProps = {
  todo: Todo;
};

function TodoListEntry({todo}: TodoListEntryProps) {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Text>{todo.text}</Text>
    </View>
  );
}

export default TodoListEntry;
