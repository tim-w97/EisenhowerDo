import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type FixedBottomButtonProps = {
  text: string;
  onTap: () => void;
  backgroundColor?: string;
};

export default function FixedBottomButton(props: FixedBottomButtonProps) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.button,
          {backgroundColor: props.backgroundColor ?? 'lightblue'},
        ]}
        onTouchEnd={props.onTap}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    top: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 230,
    borderRadius: 100,
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
