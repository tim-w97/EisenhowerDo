import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import colors from '../styles/colors.ts';

export default function LoadingScreen() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    ...colors.primaryBackground,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});
