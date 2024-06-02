import React, {useEffect} from 'react';
import globalStyles from '../styles/globalStyles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet, TextInput} from 'react-native';
import FixedBottomButton from '../views/FixedBottomButton.tsx';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/rootStackParamList.ts';
import todosSlice from '../redux/slices/todosSlice.ts';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import selectUserToShareTodoWith from '../redux/selectors/selectUserToShareTodoWith.ts';
import useAppSelector from '../redux/hooks/useAppSelector.ts';
import shareTodo from '../redux/thunks/shareTodo.ts';
import {useSelector} from 'react-redux';
import selectLastTappedTodo from '../redux/selectors/selectLastTappedTodo.ts';
import selectTodoError from '../redux/selectors/selectTodoError.ts';
import selectTodoSharedSuccessfully from '../redux/selectors/selectTodoSharedSuccessfully.ts';
import showSnackbar from '../utils/showSnackbar.ts';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function ShareTodoScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const username = useAppSelector(selectUserToShareTodoWith());
  const todo = useSelector(selectLastTappedTodo());
  const todoSharedSuccessfully = useSelector(selectTodoSharedSuccessfully());

  const error = useAppSelector(selectTodoError());

  useEffect(() => {
    if (error) {
      showSnackbar(error);
    }
  }, [error]);

  useEffect(() => {
    if (todoSharedSuccessfully) {
      showSnackbar('Todo wurde geteilt');

      // Go back to MyTodosScreen
      navigation.goBack();
      navigation.goBack();

      dispatch(todosSlice.actions.setTodoSharedStatus(false));
    }
  }, [todoSharedSuccessfully, navigation, dispatch]);

  async function onShare() {
    dispatch(todosSlice.actions.clearUserToShareTodoWith());

    if (username === '') {
      showSnackbar('Bitte gib einen Benutzernamen ein');

      return;
    }

    const sharedTodo = {todoID: todo.id, username};

    dispatch(shareTodo(sharedTodo));
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Name des anderen Benutzers
      </Text>

      <TextInput
        value={username}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        placeholder="Benutzername"
        onChangeText={user =>
          dispatch(todosSlice.actions.setUserToShareTodoWith(user))
        }
      />
      <FixedBottomButton text="Jetzt teilen" onTap={onShare} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  smallBottomMargin: {
    marginBottom: 20,
  },
  bigBottomMargin: {
    marginBottom: 50,
  },
});
