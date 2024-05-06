import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodoItem from '../views/TodoItem.tsx';
import {NavigationProp} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles.ts';
import {useDispatch, useSelector} from 'react-redux';
import selectAllTodos from '../redux/selectors/selectAllTodos.ts';
import {fetchTodos} from '../redux/thunks/fetchTodos.ts';
import selectStatus from '../redux/selectors/selectStatus.ts';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  AddTodo: undefined;

  TodoDetails: {todoID: string};
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

function MyTodosScreen({navigation}: Props) {
  const todos = useSelector(selectAllTodos());
  const status = useSelector(selectStatus());
  const dispatch = useDispatch();

  function onAddNewTodo() {
    navigation.navigate('AddTodo');
  }

  function onTodoItemTapped(todoID: string) {
    navigation.navigate('TodoDetails', {todoID});
  }

  function onLoadTodos() {
    dispatch(fetchTodos());
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>{status}</Text>
        <View style={styles.todoItems}>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onTap={onTodoItemTapped} />
          ))}
        </View>
        <View style={styles.button}>
          <Button title="Neues Todo hinzufügen" onPress={onAddNewTodo} />
        </View>
        <View style={styles.button}>
          <Button title="Todos laden" onPress={onLoadTodos} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    ...globalStyles.safeArea,
  },
  todoItems: {
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: 30,
  },
});

export default MyTodosScreen;
