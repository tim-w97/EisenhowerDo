import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import Todo from '../types/todo.ts';
import 'react-native-get-random-values';
import {v4 as generateUUID} from 'uuid';
import {NavigationProp} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import {addTodo} from '../redux/thunks/addTodo.ts';
import {useAppSelector} from '../redux/hooks/useAppSelector.ts';
import selectTodoStatus from '../redux/selectors/selectTodoStatus.ts';
import LoadingScreen from './LoadingScreen.tsx';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  MyTodos: undefined;
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

function AddTodoScreen({navigation}: Props): React.JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectTodoStatus());

  let currentTitle: string = '';
  let currentText: string = '';

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Titel
      </Text>

      <TextInput
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        placeholder="Titel"
        onChangeText={text => (currentTitle = text)}
      />
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Beschreibung
      </Text>

      <TextInput
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        multiline={true}
        textAlignVertical="top"
        numberOfLines={5}
        placeholder="Beschreibung"
        onChangeText={text => (currentText = text)}
      />
      <Button title="Todo hinzufügen" onPress={onAddTodo} />
    </SafeAreaView>
  );

  async function onAddTodo() {
    if (currentTitle.trim() === '' || currentText.trim() === '') {
      // TODO: show snackbar or something
      return;
    }

    const newTodo: Todo = {
      id: generateUUID(),
      title: currentTitle,
      text: currentText,
      isCompleted: false,
      isImportant: false,
      isUrgent: false,
    };

    await dispatch(addTodo(newTodo));

    navigation.goBack();
  }
}

const styles = StyleSheet.create({
  smallBottomMargin: {
    marginBottom: 20,
  },
  bigBottomMargin: {
    marginBottom: 50,
  },
});

export default AddTodoScreen;
