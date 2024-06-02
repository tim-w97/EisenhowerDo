import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../styles/colors.ts';

type CheckboxProps = {
  style?: any;
  title: string;
  isChecked: boolean;
  onToggle: () => void;
};

export default function Checkbox({
  style,
  title,
  isChecked,
  onToggle,
}: CheckboxProps) {
  return (
    <View style={[styles.container, style]} onTouchEnd={onToggle}>
      <Text style={globalStyles.bigTitle}>{title}</Text>

      <View style={styles.stackedContainer}>
        <View style={styles.checkbox} />
        {isChecked ? (
          <Icon style={styles.checkIcon} name="check" size={50} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stackedContainer: {
    width: 50,
    height: 50,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: 50,
    height: 50,
    borderWidth: 5,
    borderRadius: 5,
    ...colors.primaryBorder,
  },
  checkIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    ...colors.icon,
  },
});
