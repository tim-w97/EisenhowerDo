import React from 'react';
import MyTodosScreen from './screens/MyTodosScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTodoScreen from './screens/AddTodoScreen.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTodos">
        <Stack.Screen
          name="MyTodos"
          component={MyTodosScreen}
          options={{title: 'Meine Todos'}}
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodoScreen}
          options={{title: 'Neues Todo hinzufügen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
