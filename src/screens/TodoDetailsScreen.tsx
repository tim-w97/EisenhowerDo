import {Button, SafeAreaView, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';

type StackParamList = {
  TodoDetails: {todoID: string};
};

type Props = {
  navigation: NavigationProp<StackParamList, 'TodoDetails'>;
  route: RouteProp<StackParamList, 'TodoDetails'>;
};

function TodoDetailsScreen({route, navigation}: Props) {
  const {todoID} = route.params;

  function onMarkTodoAsCompleted() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View>
        <Text>{todoID}</Text>
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
