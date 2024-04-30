import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import TodoItem from '../views/TodoItem.tsx';
import {NavigationProp} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles.ts';
import {useSelector} from 'react-redux';
import TodosState from '../types/todosState.ts';

type RootStackParamList = {
  // undefined means that this screen doesn't receive any params
  AddTodo: undefined;
  TodoDetails: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

function MyTodosScreen({navigation}: Props) {
  const todos = useSelector((state: TodosState) => state.todos);

  function onAddNewTodo() {
    navigation.navigate('AddTodo');
  }

  function onTodoItemTapped() {
    navigation.navigate('TodoDetails');
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
    padding: 7,
  },
  todoItems: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    padding: 13,
    marginTop: 30,
  },
});

export default MyTodosScreen;
