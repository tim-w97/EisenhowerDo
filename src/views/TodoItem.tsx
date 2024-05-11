import {StyleSheet, Text, View} from 'react-native';
import Todo from '../types/todo.ts';
import React from 'react';

type TodoItemProps = {
  todo: Todo;
  onTap: (todoID: number) => void;
};

function TodoItem({todo, onTap}: TodoItemProps) {
  return (
    <View style={styles.todoItem} onTouchEnd={() => onTap(todo.id)}>
      <Text>{todo.title}</Text>
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
  todoItem: {
    backgroundColor: 'lightyellow',
    width: 120,
    height: 120,
    padding: 5,
    borderRadius: 4,
    aspectRatio: 1,
  },
});

export default TodoItem;
