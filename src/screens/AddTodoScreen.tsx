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
import Todo from '../types/todo.ts';
import 'react-native-get-random-values';
import {v4 as generateUUID} from 'uuid';
import {NavigationProp} from '@react-navigation/native';
import todosSlice from '../redux/slices/todosSlice.ts';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  MyTodos: undefined;
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

function AddTodoScreen({navigation}: Props): React.JSX.Element {
  const dispatch = useAppDispatch();

  let currentTitle: string = '';
  let currentText: string = '';

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.bigBottomMargin]}>
        Füge ein neues Todo hinzu
      </Text>

      <View style={styles.bigBottomMargin}>
        <TextInput
          style={[globalStyles.textInput, styles.bigBottomMargin]}
          placeholder="Titel"
          onChangeText={text => (currentTitle = text)}
        />
        <TextInput
          style={globalStyles.textInput}
          multiline={true}
          textAlignVertical="top"
          numberOfLines={5}
          placeholder="Text"
          onChangeText={text => (currentText = text)}
        />
      </View>
      <Button title="Todo hinzufügen" onPress={onAddTodo} />
    </SafeAreaView>
  );

  function onAddTodo() {
    const newTodo: Todo = {
      id: generateUUID(),
      title: currentTitle,
      text: currentText,
      isCompleted: false,
      isImportant: false,
      isUrgent: false,
    };

    dispatch(todosSlice.actions.addTodo(newTodo));

    navigation.goBack();
  }
}

const styles = StyleSheet.create({
  bigBottomMargin: {
    marginBottom: 20,
  },
});

export default AddTodoScreen;
