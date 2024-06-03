import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text} from 'react-native';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import userSlice from '../redux/slices/userSlice.ts';
import globalStyles from '../styles/globalStyles.ts';
import todosSlice from '../redux/slices/todosSlice.ts';

export default function LogOutButton() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(todosSlice.actions.clearTodos());
        dispatch(userSlice.actions.logout());

        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }}>
      <Text style={globalStyles.actionButton}>Ausloggen</Text>
    </Pressable>
  );
}
