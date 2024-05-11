import React from 'react';
import globalStyles from '../styles/globalStyles.ts';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import {NavigationProp, StackActions} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import {login} from '../redux/thunks/login.ts';
import {useAppSelector} from '../redux/hooks/useAppSelector.ts';
import selectUserStatus from '../redux/selectors/selectUserStatus.ts';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  LoginScreen: undefined;
  MyTodosScreen: undefined;
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

function LoginScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectUserStatus());

  let username: string;
  let password: string;

  async function onLogin() {
    const result = await dispatch(login({username, password}));
    const token = result.payload;

    // if there is a token, the user is logged in
    if (token) {
      navigation.dispatch(StackActions.replace('MyTodosScreen'));
    }
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text>{status}</Text>
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Benutzername
      </Text>
      <TextInput
        placeholder={'Benutzername'}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        onChangeText={text => (username = text)}
      />
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Passwort
      </Text>
      <TextInput
        secureTextEntry={true}
        placeholder={'Passwort'}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        onChangeText={text => (password = text)}
      />
      <Button title={'Einloggen'} onPress={onLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  smallBottomMargin: {
    marginBottom: 10,
  },
  bigBottomMargin: {
    marginBottom: 20,
  },
});

export default LoginScreen;
