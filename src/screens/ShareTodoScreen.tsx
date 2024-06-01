import React from 'react';
import globalStyles from '../styles/globalStyles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Animated, StyleSheet, TextInput} from 'react-native';
import Text = Animated.Text;
import FixedBottomButton from '../views/FixedBottomButton.tsx';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/rootStackParamList.ts';
import Snackbar from 'react-native-snackbar';
import todosSlice from '../redux/slices/todosSlice.ts';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import selectUserToShareTodoWith from '../redux/selectors/selectUserToShareTodoWith.ts';
import useAppSelector from '../redux/hooks/useAppSelector.ts';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function ShareTodoScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const username = useAppSelector(selectUserToShareTodoWith());

  function onShare() {
    dispatch(todosSlice.actions.clearUserToShareTodoWith());

    // Go back to MyTodos
    navigation.goBack();
    navigation.goBack();

    Snackbar.show({
      text: 'Todo wurde geteilt',
    });
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
      <FixedBottomButton
        text="Jetzt teilen"
        onTap={onShare}
        backgroundColor="lightgreen"
      />
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
