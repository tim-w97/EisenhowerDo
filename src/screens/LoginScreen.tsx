import globalStyles from '../styles/globalStyles.ts';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

function LoginScreen() {
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
      <Button title={'Einloggen'} />
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
