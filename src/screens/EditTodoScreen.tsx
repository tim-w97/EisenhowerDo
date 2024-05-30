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
import 'react-native-get-random-values';
import {NavigationProp} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import addTodo from '../redux/thunks/addTodo.ts';
import useAppSelector from '../redux/hooks/useAppSelector.ts';
import selectTodoStatus from '../redux/selectors/selectTodoStatus.ts';
import LoadingScreen from './LoadingScreen.tsx';
import Snackbar from 'react-native-snackbar';
import Checkbox from '../views/Checkbox.tsx';
import todosSlice from '../redux/slices/todosSlice.ts';
import selectTodoData from '../redux/selectors/selectTodoData.ts';
import {useSelector} from 'react-redux';
import selectSingleTodo from '../redux/selectors/selectSingleTodo.ts';
import selectLastTappedTodo from '../redux/selectors/selectLastTappedTodo.ts';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  MyTodos: undefined;
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

export default function EditTodoScreen({navigation}: Props): React.JSX.Element {
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectTodoStatus());
  const todoData = useAppSelector(selectTodoData());
  const lastTappedTodo = useAppSelector(selectLastTappedTodo());
  const todo = useSelector(selectSingleTodo(lastTappedTodo));

  if (!todo) {
    throw new Error(`Todo with id ${lastTappedTodo} doesn't exist.`);
  }

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Titel
      </Text>

      {/*TODO: allow submit via keyboard so it hides automatically*/}
      <TextInput
        value={todo.title}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        placeholder="Titel"
        onChangeText={title =>
          dispatch(todosSlice.actions.setTemporaryData({...todoData, title}))
        }
      />
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Beschreibung
      </Text>

      <TextInput
        value={todo.text}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        multiline={true}
        textAlignVertical="top"
        numberOfLines={5}
        placeholder="Beschreibung"
        onChangeText={text =>
          dispatch(todosSlice.actions.setTemporaryData({...todoData, text}))
        }
      />

      <View style={[styles.checkboxes, styles.bigBottomMargin]}>
        <Checkbox
          style={styles.smallBottomMargin}
          title="Ist wichtig"
          isChecked={todoData.isImportant}
          onToggle={() =>
            dispatch(
              todosSlice.actions.setTemporaryData({
                ...todoData,
                isImportant: !todoData.isImportant,
              }),
            )
          }
        />
        <Checkbox
          title="Ist dringend"
          isChecked={todoData.isUrgent}
          onToggle={() =>
            dispatch(
              todosSlice.actions.setTemporaryData({
                ...todoData,
                isUrgent: !todoData.isUrgent,
              }),
            )
          }
        />
      </View>
      <Button title="Todo ändern" onPress={onChangeTodo} />
    </SafeAreaView>
  );

  async function onChangeTodo() {
    if (todoData.title.trim() === '') {
      Snackbar.show({
        text: 'Bitte gebe einen Titel ein',
      });

      return;
    }

    if (todoData.text.trim() === '') {
      Snackbar.show({
        text: 'Bitte gebe eine Beschreibung ein',
      });

      return;
    }

    await dispatch(addTodo(todoData));
    dispatch(todosSlice.actions.clearTemporaryData());

    navigation.goBack();

    Snackbar.show({
      text: 'Todo wurde geändert',
    });
  }
}

const styles = StyleSheet.create({
  checkboxes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  smallBottomMargin: {
    marginBottom: 20,
  },
  bigBottomMargin: {
    marginBottom: 50,
  },
});
