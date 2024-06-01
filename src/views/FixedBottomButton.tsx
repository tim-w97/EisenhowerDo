import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type FixedBottomButtonProps = {
  text: string;
  onTap: () => void;
  backgroundColor?: string;
  isTop?: boolean;
};

export default function FixedBottomButton(props: FixedBottomButtonProps) {
  return (
    <View style={[styles.container, props.isTop ? styles.topButton : null]}>
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
  topButton: {
    bottom: 130,
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

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
