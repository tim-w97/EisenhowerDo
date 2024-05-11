import {Button, SafeAreaView, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import selectSingleTodo from '../redux/selectors/selectSingleTodo.ts';

type StackParamList = {
  TodoDetails: {todoID: number};
};

type Props = {
  navigation: NavigationProp<StackParamList>;
  route: RouteProp<StackParamList>;
};

function TodoDetailsScreen({route, navigation}: Props) {
  const todo = useSelector(selectSingleTodo(route.params.todoID));

  if (!todo) {
    throw new Error("Todo with id ${route.params.todoID} doesn't exist.");
  }

  function onMarkTodoAsCompleted() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View>
        <Text>{todo.title}</Text>
        <Text>{todo.text}</Text>
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
