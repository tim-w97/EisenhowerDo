import {Text} from 'react-native';
import globalStyles from '../styles/globalStyles.ts';
import React from 'react';

export default function EditTodoButton() {
  return (
    <Text
      style={globalStyles.actionButton}
      onPress={() => {
        // TODO: implement me
      }}>
      Bearbeiten
    </Text>
  );
}
