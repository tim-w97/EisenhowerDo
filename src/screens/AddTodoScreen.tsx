import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
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
import selectPendingTodo from '../redux/selectors/selectPendingTodo.ts';
import FixedBottomButton from '../views/FixedBottomButton.tsx';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  MyTodos: undefined;
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

export default function AddTodoScreen({navigation}: Props): React.JSX.Element {
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectTodoStatus());
  const pendingTodo = useAppSelector(selectPendingTodo());

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
        onChangeText={title =>
          dispatch(todosSlice.actions.setPendingTodo({...pendingTodo, title}))
        }
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
      <FixedBottomButton text="Todo hinzufügen" onTap={onAddTodo} />
    </SafeAreaView>
  );

  async function onAddTodo() {
    if (pendingTodo.title.trim() === '') {
      Snackbar.show({
        text: 'Bitte gib einen Titel ein',
      });

      return;
    }

    if (pendingTodo.text.trim() === '') {
      Snackbar.show({
        text: 'Bitte gib eine Beschreibung ein',
      });

      return;
    }

    await dispatch(addTodo(pendingTodo));
    dispatch(todosSlice.actions.clearPendingTodo());

    navigation.goBack();

    Snackbar.show({
      text: 'Todo wurde hinzugefügt',
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
