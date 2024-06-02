import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../styles/colors.ts';
import shadows from '../styles/shadows.ts';
import text from '../styles/text.ts';

type FixedBottomButtonProps = {
  text: string;
  onTap: () => void;
  isTop?: boolean;
};

export default function FixedBottomButton(props: FixedBottomButtonProps) {
  return (
    <View style={[styles.container, props.isTop ? styles.bottomMargin : null]}>
      <View
        style={[styles.button, props.isTop ? styles.topButton : null]}
        onTouchEnd={props.onTap}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomMargin: {
    bottom: 130,
  },
  topButton: {
    ...colors.secondary,
  },
  container: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    top: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 15,
    ...shadows.defaultShadow,
    ...colors.primary,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    ...colors.brightText,
    ...text.bigTitle,
  },
});
