import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../styles/globalStyles.ts';
import {Text} from 'react-native';

export default function OnboardingScreen2() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text>Onboarding Teil 2</Text>
    </SafeAreaView>
  );
}
