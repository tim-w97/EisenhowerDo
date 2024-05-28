import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type FixedBottomButtonProps = {
  text: string;
  onTap: () => void;
  backgroundColor?: string;
};

export default function FixedBottomButton(props: FixedBottomButtonProps) {
  return (
    <View
      style={[
        styles.buttonContainer,
        {backgroundColor: props.backgroundColor ?? 'lightblue'},
      ]}
      onTouchEnd={props.onTap}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
