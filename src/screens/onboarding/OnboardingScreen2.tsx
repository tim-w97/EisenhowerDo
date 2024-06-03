import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../styles/globalStyles.ts';
import {Text} from 'react-native';
import FixedBottomButton from '../../views/FixedBottomButton.tsx';
import {useNavigation} from '@react-navigation/native';

export default function OnboardingScreen2() {
  const navigation = useNavigation();

  function onContinue() {
    navigation.navigate('Onboarding3');
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text>Onboarding Teil 2</Text>
      <FixedBottomButton text="Weiter" onTap={onContinue} />
    </SafeAreaView>
  );
}
