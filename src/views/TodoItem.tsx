import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Todo} from '../types/todo.ts';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import text from '../styles/text.ts';
import colors from '../styles/colors.ts';

type TodoItemProps = {
  todo: Todo;
  onTap?: (todo: Todo) => void;
};

export default function TodoItem({todo, onTap}: TodoItemProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.todoItem, getBackgroundColor()]}
        onPress={onTap?.bind(null, todo)}>
        <Text style={[styles.todoText]}>{todo.title}</Text>
        {todo.isShared ? (
          <View style={styles.iconContainer}>
            <Icon name="user-group" size={25} />
          </View>
        ) : null}
      </Pressable>
    </View>
  );

  function getBackgroundColor() {
    if (todo.isImportant && todo.isUrgent) {
      return colors.isImportantAndUrgent;
    }

    if (todo.isImportant && !todo.isUrgent) {
      return colors.isImportant;
    }

    if (!todo.isImportant && todo.isUrgent) {
      return colors.isUrgent;
    }

    return colors.isNotImportantAndNotUrgent;
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  todoText: {
    ...text.defaultText,
    ...colors.darkText,
  },

  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
