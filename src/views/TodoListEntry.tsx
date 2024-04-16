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
      <Text
        style={[
          listEntryStyles.todoTitle,
          todo.isCompleted
            ? listEntryStyles.completedTodo
            : listEntryStyles.openTodo,
        ]}>
        {todo.title}
      </Text>
      <Icon
        name={todo.isCompleted ? 'checkbox-outline' : 'checkbox-blank-outline'}
        size={30}
        onPress={onSetCompleted}
        style={listEntryStyles.checkmark}
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
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    paddingLeft: 20,
  },

  checkmark: {
    padding: 20,
  },

  todoTitle: {
    fontSize: 18,
  },

  openTodo: {
    fontWeight: 'bold',
  },

  completedTodo: {
    textDecorationLine: 'line-through',
  },
});
export default TodoListEntry;
