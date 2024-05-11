import React, {useEffect} from 'react';
import globalStyles from '../styles/globalStyles.ts';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import {NavigationProp, StackActions} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import {login} from '../redux/thunks/login.ts';
import {useAppSelector} from '../redux/hooks/useAppSelector.ts';
import selectUserStatus from '../redux/selectors/selectUserStatus.ts';
import selectToken from '../redux/selectors/selectToken.ts';
import LoadingScreen from './LoadingScreen.tsx';

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
  const token = useAppSelector(selectToken());

  useEffect(() => {
    // if there is a token, the user is logged in
    if (token) {
      navigation.dispatch(StackActions.replace('MyTodosScreen'));
    }
  }, [navigation, token]);

  let username: string;
  let password: string;

  function onLogin() {
    dispatch(login({username, password}));
  }

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
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
