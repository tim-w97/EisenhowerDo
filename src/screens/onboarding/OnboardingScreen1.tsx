import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../styles/globalStyles.ts';
import {StyleSheet, Text} from 'react-native';
import FixedBottomButton from '../../views/FixedBottomButton.tsx';
import {useNavigation} from '@react-navigation/native';
import text from '../../styles/text.ts';

export default function OnboardingScreen1() {
  const navigation = useNavigation();

  function onContinue() {
    navigation.navigate('Onboarding2');
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Text style={[styles.bigBottomMargin, globalStyles.bigTitle]}>Hi!</Text>
      <Text style={text.defaultText}>
        Schön, dass du da bist! Willkommen bei EisenhowerDo, deiner neuen
        Todo-App. Ich freue mich, dass du dich für meine App entschieden hast,
        um deine Aufgaben zu organisieren und deine Produktivität zu steigern.
        Lass uns gemeinsam deine Ziele erreichen und deinen Alltag effizienter
        gestalten.
      </Text>
      <FixedBottomButton text="Weiter" onTap={onContinue} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bigBottomMargin: {
    marginBottom: 50,
  },
});
