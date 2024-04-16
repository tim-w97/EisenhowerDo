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
import 'react-native-get-random-values';
import {v4 as generateUUID} from 'uuid';

let currentTitle: string = '';
let currentText: string = '';

function AddTodoScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.title]}>
        Füge ein neues Todo hinzu
      </Text>

      <View style={styles.inputFields}>
        <TextInput
          placeholder="Titel"
          onChangeText={text => (currentTitle = text)}
        />
        <TextInput
          multiline={true}
          numberOfLines={3}
          placeholder="Text"
          onChangeText={text => (currentText = text)}
        />
      </View>
      <Button title="Todo hinzufügen" onPress={onAddTodo} />
    </SafeAreaView>
  );
}

function onAddTodo() {
  const newTodo: Todo = {
    id: generateUUID(),
    title: currentTitle,
    text: currentText,
    isCompleted: false,
    isImportant: false,
    isUrgent: false,
  };

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
