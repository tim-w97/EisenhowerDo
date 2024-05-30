import React, {useEffect} from 'react';
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
import useAppSelector from '../redux/hooks/useAppSelector.ts';
import selectTodoStatus from '../redux/selectors/selectTodoStatus.ts';
import LoadingScreen from './LoadingScreen.tsx';
import Snackbar from 'react-native-snackbar';
import Checkbox from '../views/Checkbox.tsx';
import todosSlice from '../redux/slices/todosSlice.ts';
import selectTemporaryData from '../redux/selectors/selectTemporaryData.ts';
import selectLastTappedTodo from '../redux/selectors/selectLastTappedTodo.ts';
import editTodo from '../redux/thunks/editTodo.ts';
import {Todo} from '../types/todo.ts';

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
  const temporaryData = useAppSelector(selectTemporaryData());
  const todo = useAppSelector(selectLastTappedTodo());

  useEffect(() => {
    dispatch(todosSlice.actions.setTemporaryData(todo));
  }, [dispatch, todo]);

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
        defaultValue={temporaryData.title}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        placeholder="Titel"
        onChangeText={title =>
          dispatch(
            todosSlice.actions.setTemporaryData({...temporaryData, title}),
          )
        }
      />
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Beschreibung
      </Text>

      <TextInput
        defaultValue={temporaryData.text}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        multiline={true}
        textAlignVertical="top"
        numberOfLines={5}
        placeholder="Beschreibung"
        onChangeText={text =>
          dispatch(
            todosSlice.actions.setTemporaryData({...temporaryData, text}),
          )
        }
      />

      <View style={[styles.checkboxes, styles.bigBottomMargin]}>
        <Checkbox
          style={styles.smallBottomMargin}
          title="Ist wichtig"
          isChecked={temporaryData.isImportant}
          onToggle={() =>
            dispatch(
              todosSlice.actions.setTemporaryData({
                ...temporaryData,
                isImportant: !temporaryData.isImportant,
              }),
            )
          }
        />
        <Checkbox
          title="Ist dringend"
          isChecked={temporaryData.isUrgent}
          onToggle={() =>
            dispatch(
              todosSlice.actions.setTemporaryData({
                ...temporaryData,
                isUrgent: !temporaryData.isUrgent,
              }),
            )
          }
        />
      </View>
      <Button title="Todo ändern" onPress={onChangeTodo} />
    </SafeAreaView>
  );

  async function onChangeTodo() {
    if (temporaryData.title.trim() === '') {
      Snackbar.show({
        text: 'Bitte gebe einen Titel ein',
      });

      return;
    }

    if (temporaryData.text.trim() === '') {
      Snackbar.show({
        text: 'Bitte gebe eine Beschreibung ein',
      });

      return;
    }

    const updatedTodo: Todo = {...temporaryData, id: todo.id};

    await dispatch(editTodo(updatedTodo));
    dispatch(todosSlice.actions.clearTemporaryData());

    navigation.goBack();
    navigation.goBack();

    Snackbar.show({
      text: 'Todo wurde geändert',
      marginBottom: 85,
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
