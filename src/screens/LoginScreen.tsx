import React, {Fragment, useEffect} from 'react';
import globalStyles from '../styles/globalStyles.ts';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import login from '../redux/thunks/login.ts';
import useAppSelector from '../redux/hooks/useAppSelector.ts';
import selectLoginStatus from '../redux/selectors/selectLoginStatus.ts';
import selectToken from '../redux/selectors/selectToken.ts';
import register from '../redux/thunks/register.ts';
import selectLoginError from '../redux/selectors/selectLoginError.ts';
import selectCredentials from '../redux/selectors/selectCredentials.ts';
import userSlice from '../redux/slices/userSlice.ts';
import FixedBottomButton from '../views/FixedBottomButton.tsx';
import showSnackbar from '../utils/showSnackbar.ts';
import {getOnboardingStatus} from '../utils/onboardingStatus.ts';
import navigateAndReset from '../utils/navigateAndReset.ts';

export default function LoginScreen() {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const status = useAppSelector(selectLoginStatus());

  const credentials = useAppSelector(selectCredentials());
  const token = useAppSelector(selectToken());
  const error = useAppSelector(selectLoginError());

  // Navigate to the onboarding if the user hasn't seen it yet
  useFocusEffect(() => {
    getOnboardingStatus().then(onboardingStatus => {
      if (onboardingStatus === 'notSeen') {
        navigateAndReset(navigation, 'Onboarding1');
      }
    });
  });

  // If there is a token, navigate the user directly to the todos
  useEffect(() => {
    if (token) {
      dispatch(userSlice.actions.clearCredentials());
      navigateAndReset(navigation, 'MyTodos');
    }
  }, [dispatch, navigation, token]);

  // If there is any error, show a snackbar
  useEffect(() => {
    if (!error) {
      return;
    }

    showSnackbar(error);
  }, [error]);

  function checkForEmptyValues(): boolean {
    if (credentials.username.trim() === '') {
      showSnackbar('Bitte gib einen Benutzernamen ein');
      return false;
    }

    if (credentials.password.trim() === '') {
      showSnackbar('Bitte gib ein Passwort ein');
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
          <FixedBottomButton text={'Einloggen'} onTap={onLogin} />
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
