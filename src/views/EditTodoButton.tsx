import {Text} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function EditTodoButton() {
  const navigation = useNavigation();

  return (
    <Text
      style={globalStyles.actionButton}
      onPress={() => {
        navigation.navigate('EditTodo');
      }}>
      Bearbeiten
    </Text>
  );
}
