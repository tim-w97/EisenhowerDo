import {StackActions, useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import userSlice from '../redux/slices/userSlice.ts';

export default function LogOutButton() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <Button
      title="Ausloggen"
      onPress={() => {
        dispatch(userSlice.actions.logout());
        navigation.dispatch(StackActions.replace('LoginScreen'));
      }}
    />
  );
}
