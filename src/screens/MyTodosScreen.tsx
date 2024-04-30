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
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

function MyTodosScreen({navigation}: Props) {
  const todos = useSelector((state: TodosState) => state.todos);

  function onAddNewTodo() {
    navigation.navigate('AddTodo');
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.todoItems}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </View>
      <View style={styles.button}>
        <Button title="Neues Todo hinzufügen" onPress={onAddNewTodo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoItems: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: 30,
  },
});

export default MyTodosScreen;
