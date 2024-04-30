import React from 'react';
import MyTodosScreen from './screens/MyTodosScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTodoScreen from './screens/AddTodoScreen.tsx';
import {Provider} from 'react-redux';
import store from './redux/store.ts';
import TodoDetailsScreen from './screens/TodoDetailsScreen.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // TODO: use enums for route names

  return (
    <Provider store={store}>
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
          <Stack.Screen
            name="TodoDetails"
            component={TodoDetailsScreen}
            options={{title: 'Details zu Todo'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
