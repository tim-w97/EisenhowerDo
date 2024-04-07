import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Todo from '../types/todo.ts';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';

type TodoListEntryProps = {
  todo: Todo;
  styles?: StyleProp<ViewStyle>;
};

function TodoListEntry({todo, styles}: TodoListEntryProps) {
  return (
    <View style={[styles, listEntryStyles.listEntry]}>
      <Text style={listEntryStyles.todoTitle}>{todo.title}</Text>
      <Icon name="checkbox-passive" size={30} />
      {/*<Icon name="checkbox-active" size={30} />*/}
    </View>
  );
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
