import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';

type CheckboxProps = {
  style?: any;
  title: string;
  onToggle: () => void;
};

export default function Checkbox({style, title, onToggle}: CheckboxProps) {
  return (
    <View style={[styles.container, style]} onTouchEnd={onToggle}>
      <Text style={globalStyles.bigTitle}>{title}</Text>
      <View style={styles.checkbox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'lightblue',
  },
});
