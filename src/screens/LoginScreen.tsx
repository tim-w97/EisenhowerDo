import React from 'react';
import globalStyles from '../styles/globalStyles.ts';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import {login} from '../redux/thunks/login.ts';

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

  function onLogin() {
    dispatch(login());
    //navigation.navigate('MyTodosScreen');
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Benutzername
      </Text>
      <TextInput
        placeholder={'Benutzername'}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
      />
      <Text style={[globalStyles.bigTitle, styles.smallBottomMargin]}>
        Passwort
      </Text>
      <TextInput
        secureTextEntry={true}
        placeholder={'Passwort'}
        style={[globalStyles.textInput, styles.bigBottomMargin]}
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
