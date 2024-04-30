import {Button, SafeAreaView, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import React from 'react';

function TodoDetailsScreen() {
  function onMarkTodoAsCompleted() {}

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View>
        <Text>Hier kommt der Titel hin</Text>
        <Text>Hier kommt der Text hin hin</Text>
      </View>
      <View>
        <Button
          title="als erledigt markieren"
          onPress={onMarkTodoAsCompleted}
        />
      </View>
    </SafeAreaView>
  );
}

export default TodoDetailsScreen;
