import React from 'react';
import MyTodosScreen from './screens/MyTodosScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTodoScreen from './screens/AddTodoScreen.tsx';
import {Provider} from 'react-redux';
import TodoDetailsScreen from './screens/TodoDetailsScreen.tsx';
import store from './redux/store.ts';
import {RootStackParamList} from './types/rootStackParamList.ts';
import LoginScreen from './screens/LoginScreen.tsx';
import LogOutButton from './views/LogOutButton.tsx';
import EditTodoButton from './views/EditTodoButton.tsx';
import EditTodoScreen from './screens/EditTodoScreen.tsx';
import ShareTodoScreen from './screens/ShareTodoScreen.tsx';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): React.JSX.Element {
  return (
    // TODO: add a welcome screen / splash screen, explaining how the app works
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{title: 'Einloggen'}}
          />
          <Stack.Screen
            name="MyTodosScreen"
            component={MyTodosScreen}
            options={{
              title: 'Meine Todos',
              headerRight: LogOutButton,
            }}
          />
          <Stack.Screen
            name="AddTodo"
            component={AddTodoScreen}
            options={{title: 'Neues Todo hinzufügen'}}
          />
          <Stack.Screen
            name="EditTodo"
            component={EditTodoScreen}
            options={{title: 'Todo ändern'}}
          />
          <Stack.Screen
            name="TodoDetails"
            component={TodoDetailsScreen}
            options={{title: 'Details zu Todo', headerRight: EditTodoButton}}
          />
          <Stack.Screen
            name="ShareTodo"
            component={ShareTodoScreen}
            options={{title: 'Mit anderem Benutzer teilen'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
