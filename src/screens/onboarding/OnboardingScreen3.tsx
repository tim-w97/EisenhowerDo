import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../styles/globalStyles.ts';
import {Text} from 'react-native';
import FixedBottomButton from '../../views/FixedBottomButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {setOnboardingStatus} from '../../utils/storage.ts';

export default function OnboardingScreen3() {
  const navigation = useNavigation();

  async function onLetsGo() {
    await setOnboardingStatus('seen');

    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text>Onboarding Teil 3</Text>
      <FixedBottomButton text="Los geht's!" onTap={onLetsGo} />
    </SafeAreaView>
  );
}
