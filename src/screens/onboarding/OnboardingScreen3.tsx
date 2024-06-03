import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../styles/globalStyles.ts';
import {Text} from 'react-native';
import FixedBottomButton from '../../views/FixedBottomButton.tsx';
import {useNavigation} from '@react-navigation/native';

export default function OnboardingScreen3() {
  const navigation = useNavigation();

  function onContinue() {
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text>Onboarding Teil 3</Text>
      <FixedBottomButton text="Los geht's!" onTap={onContinue} />
    </SafeAreaView>
  );
}
