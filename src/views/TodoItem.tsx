import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Todo from '../types/todo.ts';
import React from 'react';

type TodoItemProps = {
  todo: Todo;
  styles?: StyleProp<ViewStyle>;
};

function TodoItem(props: TodoItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.todoItem}>
        <Text>{props.todo.title}</Text>
      </View>
    </View>
  );

  // TODO: put that logic inside todo details
  // function onSetCompleted() {
  //   const newStatus: TodoStatus = {
  //     todoID: todo.id,
  //     isCompleted: !todo.isCompleted,
  //   };
  //
  //   store.dispatch(todosSlice.actions.setTodoCompleted(newStatus));
  // }
}

const styles = StyleSheet.create({
  container: {
    width: '33.3%',
    height: '33.3%',
    padding: 7,
  },
  todoItem: {
    backgroundColor: 'lightyellow',
    borderRadius: 4,
    aspectRatio: 1,
    padding: 5,
  },
});

export default TodoItem;
