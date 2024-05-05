import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import TodoItem from '../views/TodoItem.tsx';
import {NavigationProp} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles.ts';
import {useSelector} from 'react-redux';
import TodosState from '../types/todosState.ts';
import selectAllTodos from '../redux/selectors/selectAllTodos.ts';

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

  function onAddNewTodo() {
    navigation.navigate('AddTodo');
  }

  function onTodoItemTapped(todoID: string) {
    navigation.navigate('TodoDetails', {todoID});
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.todoItems}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onTap={onTodoItemTapped} />
        ))}
      </View>
      <View style={styles.button}>
        <Button title="Neues Todo hinzufügen" onPress={onAddNewTodo} />
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
    padding: 13,
    marginTop: 30,
  },
});

export default MyTodosScreen;
