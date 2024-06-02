import {StyleSheet, Text, View} from 'react-native';
import {Todo} from '../types/todo.ts';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import todosSlice from '../redux/slices/todosSlice.ts';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import {useNavigation} from '@react-navigation/native';

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({todo}: TodoItemProps) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  function onTap() {
    dispatch(todosSlice.actions.setLastTappedTodo(todo));

    navigation.navigate('TodoDetails');
  }

  return (
    <View style={styles.container}>
      <View style={[styles.todoItem, getPriorityColor()]} onTouchEnd={onTap}>
        <Text>{todo.title}</Text>
        {todo.isShared ? (
          <View style={styles.iconContainer}>
            <Icon name="user-group" size={25} />
          </View>
        ) : null}
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
