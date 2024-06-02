import {Pressable, Text} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import selectLastTappedTodo from '../redux/selectors/selectLastTappedTodo.ts';

export default function EditTodoButton() {
  const navigation = useNavigation();
  const todo = useSelector(selectLastTappedTodo());

  if (todo.isShared) {
    return null;
  }

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('EditTodo');
      }}>
      <Text style={globalStyles.actionButton}>Bearbeiten</Text>
    </Pressable>
  );
}
