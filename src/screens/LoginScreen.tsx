import React, {useEffect} from 'react';
import globalStyles from '../styles/globalStyles.ts';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NavigationProp, StackActions} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import login from '../redux/thunks/login.ts';
import useAppSelector from '../redux/hooks/useAppSelector.ts';
import selectLoginStatus from '../redux/selectors/selectLoginStatus.ts';
import selectToken from '../redux/selectors/selectToken.ts';
import register from '../redux/thunks/register.ts';
import Snackbar from 'react-native-snackbar';
import selectLoginError from '../redux/selectors/selectLoginError.ts';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  LoginScreen: undefined;
  MyTodosScreen: undefined;
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

// Temporary data like this doesn't need to be inside the Redux store
let username = '';
let password = '';

export default function LoginScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectLoginStatus());
  const token = useAppSelector(selectToken());
  const error = useAppSelector(selectLoginError());

  useEffect(() => {
    // if there is a token, the user is logged in
    if (token) {
      navigation.dispatch(StackActions.replace('MyTodosScreen'));
    }
  }, [navigation, token]);

  useEffect(() => {
    if (!error) {
      return;
    }

    Snackbar.show({
      text: error,
    });
  }, [error]);

  function checkForEmptyValues(): boolean {
    if (username === '') {
      Snackbar.show({
        text: 'Bitte gebe einen Benutzernamen ein',
      });

      return false;
    }

    if (password === '') {
      Snackbar.show({
        text: 'Bitte gebe ein Passwort ein',
      });

      return false;
    }

    return true;
  }

  function onRegister() {
    const valuesAreValid = checkForEmptyValues();

    if (!valuesAreValid) {
      return;
    }

    dispatch(register({username, password}));
  }

  function onLogin() {
    const valuesAreValid = checkForEmptyValues();

    if (!valuesAreValid) {
      return;
    }

    dispatch(login({username, password}));
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
      {status === 'loading' ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.loginButtons}>
          <Button title={'Registrieren'} onPress={onRegister} color={'blue'} />
          <Button title={'Einloggen'} onPress={onLogin} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginButtons: {
    display: 'flex',
    gap: 20,
  },
  smallBottomMargin: {
    marginBottom: 20,
  },
  bigBottomMargin: {
    marginBottom: 50,
  },
});
