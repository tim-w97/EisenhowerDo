import React from 'react';
import MyTodosScreen from './screens/MyTodosScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTodoScreen from './screens/AddTodoScreen.tsx';
import {Provider} from 'react-redux';
import TodoDetailsScreen from './screens/TodoDetailsScreen.tsx';
import {store} from './redux/store.ts';
import {RootStackParamList} from './types/rootStackParamList.ts';
import LoginScreen from './screens/LoginScreen.tsx';
import LogOutButton from './views/LogOutButton.tsx';
import EditTodoButton from './views/EditTodoButton.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
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
            name="TodoDetails"
            component={TodoDetailsScreen}
            options={{title: 'Details zu Todo', headerRight: EditTodoButton}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
