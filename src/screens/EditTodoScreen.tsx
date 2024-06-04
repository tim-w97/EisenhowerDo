import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import 'react-native-get-random-values';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import useAppSelector from '../redux/hooks/useAppSelector.ts';
import selectTodoStatus from '../redux/selectors/selectTodoStatus.ts';
import LoadingScreen from './LoadingScreen.tsx';
import Checkbox from '../views/Checkbox.tsx';
import todosSlice from '../redux/slices/todosSlice.ts';
import selectPendingTodo from '../redux/selectors/selectPendingTodo.ts';
import selectLastTappedTodo from '../redux/selectors/selectLastTappedTodo.ts';
import editTodo from '../redux/thunks/editTodo.ts';
import {Todo} from '../types/todo.ts';
import FixedBottomButton from '../views/FixedBottomButton.tsx';
import showSnackbar from '../utils/showSnackbar.ts';

export default function EditTodoScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectTodoStatus());
  const pendingTodo = useAppSelector(selectPendingTodo());
  const todo = useAppSelector(selectLastTappedTodo());

  useEffect(() => {
    dispatch(todosSlice.actions.setPendingTodo(todo));
  }, [dispatch, todo]);

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Titel
      </Text>

      <TextInput
        defaultValue={pendingTodo.title}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        placeholder="Titel"
        onChangeText={title =>
          dispatch(todosSlice.actions.setPendingTodo({...pendingTodo, title}))
        }
      />
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Beschreibung
      </Text>

      <TextInput
        defaultValue={pendingTodo.text}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        multiline={true}
        textAlignVertical="top"
        numberOfLines={5}
        placeholder="Beschreibung"
        onChangeText={text =>
          dispatch(todosSlice.actions.setPendingTodo({...pendingTodo, text}))
        }
      />

      <View style={[styles.checkboxes, styles.bigBottomMargin]}>
        <Checkbox
          style={styles.smallBottomMargin}
          title="Ist wichtig"
          isChecked={pendingTodo.isImportant}
          onToggle={() =>
            dispatch(
              todosSlice.actions.setPendingTodo({
                ...pendingTodo,
                isImportant: !pendingTodo.isImportant,
              }),
            )
          }
        />
        <Checkbox
          title="Ist dringend"
          isChecked={pendingTodo.isUrgent}
          onToggle={() =>
            dispatch(
              todosSlice.actions.setPendingTodo({
                ...pendingTodo,
                isUrgent: !pendingTodo.isUrgent,
              }),
            )
          }
        />
      </View>
      <FixedBottomButton text="Todo ändern" onTap={onChangeTodo} />
    </SafeAreaView>
  );

  async function onChangeTodo() {
    if (pendingTodo.title.trim() === '') {
      showSnackbar('Bitte gib einen Titel ein');

      return;
    }

    if (pendingTodo.text.trim() === '') {
      showSnackbar('Bitte gib eine Beschreibung ein');
      return;
    }

    const updatedTodo: Todo = {...pendingTodo, id: todo.id, isShared: false};

    await dispatch(editTodo(updatedTodo));
    dispatch(todosSlice.actions.clearPendingTodo());

    navigation.goBack();
    navigation.goBack();

    showSnackbar('Todo wurde geändert');
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
