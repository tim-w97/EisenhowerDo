import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import TodoListEntry from '../views/TodoListEntry.tsx';
import dummyTodos from '../sampleData/dummyTodos.json';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  // undefined means that AddTodo doesn't receive any params
  AddTodo: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

function MyTodosScreen({navigation}: Props) {
  function onAddNewTodo() {
    navigation.navigate('AddTodo');
  }

  return (
    <SafeAreaView>
      <View style={styles.listContainer}>
        {dummyTodos.map(todo => (
          <TodoListEntry styles={styles.listEntry} key={todo.id} todo={todo} />
        ))}
      </View>
      <View style={styles.biggerMargin}>
        <Button title="Neues Todo hinzufügen" onPress={onAddNewTodo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
  },
  listEntry: {
    margin: 10,
  },
  biggerMargin: {
    margin: 50,
  },
});

export default MyTodosScreen;
