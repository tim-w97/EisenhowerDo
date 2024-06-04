import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import colors from '../styles/colors.ts';
import {useNavigation} from '@react-navigation/native';
import navigateAndReset from '../utils/navigateAndReset.ts';

export default function HelpButton() {
  const navigation = useNavigation();

  function onHelpPress() {
    navigateAndReset(navigation, 'Onboarding1');
  }

  return (
    <Pressable onPress={onHelpPress}>
      <Icon
        name="question"
        size={30}
        style={[styles.icon, colors.brightText]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingRight: 3,
  },
});
