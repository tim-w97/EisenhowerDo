import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import store from '../redux/store.ts';
import {addTodo} from '../redux/todosSlice.ts';
import Todo from '../types/todo.ts';

function AddTodoScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.title]}>
        Füge ein neues Todo hinzu
      </Text>

      <View style={styles.inputFields}>
        <TextInput placeholder="Titel" />
        <TextInput multiline={true} numberOfLines={3} placeholder="Text" />
      </View>
      <Button title="Todo hinzufügen" onPress={onAddTodo} />
    </SafeAreaView>
  );
}

function onAddTodo() {
  const newTodo: Todo = {};

  store.dispatch(addTodo(newTodo));
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
  },
  inputFields: {
    marginBottom: 50,
  },
});

export default AddTodoScreen;
