import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Todo from '../types/todo.ts';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

type TodoListEntryProps = {
  todo: Todo;
  styles?: StyleProp<ViewStyle>;
};

function TodoListEntry({todo, styles}: TodoListEntryProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <View style={[styles, listEntryStyles.listEntry]} onTouchEnd={onToggle}>
      <Text style={listEntryStyles.todoTitle}>{todo.title}</Text>
      <Icon
        name={isCompleted ? 'checkbox-outline' : 'checkbox-blank-outline'}
        size={30}
      />
    </View>
  );

  function onToggle() {
    setIsCompleted(!isCompleted);
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
