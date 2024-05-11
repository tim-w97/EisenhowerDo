import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

// TODO: use export default everywhere
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
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
