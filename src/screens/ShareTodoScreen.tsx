import React from 'react';
import globalStyles from '../styles/globalStyles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Animated} from 'react-native';
import Text = Animated.Text;
import FixedBottomButton from '../views/FixedBottomButton.tsx';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/rootStackParamList.ts';
import Snackbar from 'react-native-snackbar';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function ShareTodoScreen({navigation}: Props) {
  function onShare() {
    // Go back to MyTodos
    navigation.goBack();
    navigation.goBack();

    Snackbar.show({
      text: 'Todo wurde geteilt',
    });
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text>Jetzt teilen</Text>
      <FixedBottomButton
        text="Jetzt teilen"
        onTap={onShare}
        backgroundColor="lightgreen"
      />
    </SafeAreaView>
  );
}
