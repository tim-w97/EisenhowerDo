import {StackActions, useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import userSlice from '../redux/slices/userSlice.ts';
import globalStyles from '../styles/globalStyles.ts';

export default function LogOutButton() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <Text
      style={globalStyles.actionButton}
      onPress={() => {
        dispatch(userSlice.actions.logout());
        navigation.dispatch(StackActions.replace('LoginScreen'));
      }}>
      Ausloggen
    </Text>
  );
}
