import {StyleSheet, Text, View} from 'react-native';
import {Todo} from '../types/todo.ts';
import React from 'react';

type TodoItemProps = {
  todo: Todo;
  onTap: (todoID: number) => void;
};

export default function TodoItem({todo, onTap}: TodoItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.todoItem} onTouchEnd={() => onTap(todo.id)}>
        <Text>{todo.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 10,
  },

  todoItem: {
    backgroundColor: 'lightyellow',
    padding: 10,
    aspectRatio: 1,
  },
});
