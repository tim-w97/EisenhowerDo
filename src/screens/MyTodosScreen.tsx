import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import TodoListEntry from '../views/TodoListEntry.tsx';
import {NavigationProp} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles.ts';

type RootStackParamList = {
  // undefined means that this screen doesn't receive any params
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
    <SafeAreaView style={globalStyles.safeArea}>
      <View>
        {dummyTodos.map(todo => (
          <TodoListEntry styles={styles.listEntry} key={todo.id} todo={todo} />
        ))}
      </View>
      <View style={styles.button}>
        <Button title="Neues Todo hinzufügen" onPress={onAddNewTodo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listEntry: {
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
  },
});

export default MyTodosScreen;
