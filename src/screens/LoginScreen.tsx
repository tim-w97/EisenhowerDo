import React, {Fragment, useEffect} from 'react';
import globalStyles from '../styles/globalStyles.ts';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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
import selectCredentials from '../redux/selectors/selectCredentials.ts';
import userSlice from '../redux/slices/userSlice.ts';
import FixedBottomButton from '../views/FixedBottomButton.tsx';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  LoginScreen: undefined;
  MyTodosScreen: undefined;
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

export default function LoginScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectLoginStatus());

  const credentials = useAppSelector(selectCredentials());
  const token = useAppSelector(selectToken());
  const error = useAppSelector(selectLoginError());

  useEffect(() => {
    // if there is a token, the user is logged in
    if (token) {
      dispatch(userSlice.actions.clearCredentials());
      navigation.dispatch(StackActions.replace('MyTodosScreen'));
    }
  }, [dispatch, navigation, token]);

  useEffect(() => {
    if (!error) {
      return;
    }

    Snackbar.show({
      text: error,
    });
  }, [error]);

  function checkForEmptyValues(): boolean {
    if (credentials.username.trim() === '') {
      Snackbar.show({
        text: 'Bitte gebe einen Benutzernamen ein',
      });

      return false;
    }

    if (credentials.password.trim() === '') {
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

    dispatch(register(credentials));
  }

  function onLogin() {
    const valuesAreValid = checkForEmptyValues();

    if (!valuesAreValid) {
      return;
    }

    dispatch(login(credentials));
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Benutzername
      </Text>
      <TextInput
        placeholder={'Benutzername'}
        value={credentials.username}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        onChangeText={username =>
          dispatch(userSlice.actions.setCredentials({...credentials, username}))
        }
      />
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Passwort
      </Text>
      <TextInput
        placeholder={'Passwort'}
        secureTextEntry={true}
        value={credentials.password}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
        onChangeText={password =>
          dispatch(userSlice.actions.setCredentials({...credentials, password}))
        }
      />
      {status === 'loading' ? (
        <ActivityIndicator size="large" />
      ) : (
        <Fragment>
          <FixedBottomButton text={'Registrieren'} onTap={onRegister} isTop />
          <FixedBottomButton
            text={'Einloggen'}
            onTap={onLogin}
            backgroundColor="lightgreen"
          />
        </Fragment>
      )}
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
