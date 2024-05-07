import globalStyles from '../styles/globalStyles.ts';
import {SafeAreaView, Text} from 'react-native';

function LoginScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text>Loggen Sie sich ein</Text>
    </SafeAreaView>
  );
}

export default LoginScreen;
