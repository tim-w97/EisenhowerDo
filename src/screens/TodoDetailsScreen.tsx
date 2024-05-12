import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import selectSingleTodo from '../redux/selectors/selectSingleTodo.ts';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import deleteTodo from '../redux/thunks/deleteTodo.ts';
import Snackbar from 'react-native-snackbar';

type StackParamList = {
  TodoDetails: {todoID: number};
};

type Props = {
  navigation: NavigationProp<StackParamList>;
  route: RouteProp<StackParamList>;
};

export default function TodoDetailsScreen({route, navigation}: Props) {
  const dispatch = useAppDispatch();
  const todo = useSelector(selectSingleTodo(route.params.todoID));

  let currentTitle: string = '';
  let currentText: string = '';

  if (!todo) {
    throw new Error(`Todo with id ${route.params.todoID} doesn't exist.`);
  }

  async function onComplete() {
    if (!todo?.id) {
      throw new Error('Todo has no ID');
    }

    await dispatch(deleteTodo(todo.id));

    navigation.goBack();

    Snackbar.show({
      text: 'Todo ist erledigt',
    });
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Titel
      </Text>

      <TextInput
        value={todo.title}
        editable={false}
        style={[
          globalStyles.textInput,
          styles.textInput,
          styles.bigBottomMargin,
        ]}
        placeholder="Titel"
        onChangeText={text => (currentTitle = text)}
      />
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Beschreibung
      </Text>

      <TextInput
        value={todo.text}
        editable={false}
        style={[
          globalStyles.textInput,
          styles.textInput,
          styles.bigBottomMargin,
        ]}
        multiline={true}
        textAlignVertical="top"
        numberOfLines={5}
        placeholder="Beschreibung"
        onChangeText={text => (currentText = text)}
      />
      <Button title="Habe ich erledigt" onPress={onComplete} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'lightgray',
    color: 'black',
  },
  smallBottomMargin: {
    marginBottom: 20,
  },
  bigBottomMargin: {
    marginBottom: 50,
  },
});
