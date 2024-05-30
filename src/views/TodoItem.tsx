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
      <View
        style={[styles.todoItem, getPriorityColor()]}
        onTouchEnd={() => onTap(todo.id)}>
        <Text>{todo.title}</Text>
      </View>
    </View>
  );

  function getPriorityColor() {
    let backgroundColor = 'lightgray';

    if (todo.isImportant && todo.isUrgent) {
      // TODO: create a custom scheme for the whole app
      backgroundColor = '#F5C2C1';
    }

    if (todo.isImportant && !todo.isUrgent) {
      backgroundColor = 'lightgreen';
    }

    if (!todo.isImportant && todo.isUrgent) {
      backgroundColor = 'lightyellow';
    }

    return {backgroundColor};
  }
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 10,
  },

  todoItem: {
    padding: 10,
    aspectRatio: 1,
  },
});
