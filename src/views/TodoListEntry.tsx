import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Todo from '../types/todo.ts';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import store from '../redux/store.ts';
import todosSlice from '../redux/todosSlice.ts';
import TodoStatus from '../types/todoStatus.ts';

type TodoListEntryProps = {
  todo: Todo;
  styles?: StyleProp<ViewStyle>;
};

function TodoListEntry({todo, styles}: TodoListEntryProps) {
  return (
    <View style={[styles, listEntryStyles.listEntry]}>
      <Text style={listEntryStyles.todoTitle}>{todo.title}</Text>
      <Icon
        name={todo.isCompleted ? 'checkbox-outline' : 'checkbox-blank-outline'}
        size={30}
        onPress={onSetCompleted}
      />
    </View>
  );

  function onSetCompleted() {
    const newStatus: TodoStatus = {
      todoID: todo.id,
      isCompleted: !todo.isCompleted,
    };

    store.dispatch(todosSlice.actions.setTodoCompleted(newStatus));
  }
}

const listEntryStyles = StyleSheet.create({
  listEntry: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  todoTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default TodoListEntry;
