import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import TodoItem from '../views/TodoItem.tsx';
import {NavigationProp} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles.ts';
import selectAllTodos from '../redux/selectors/selectAllTodos.ts';
import {fetchTodos} from '../redux/thunks/fetchTodos.ts';
import selectTodoStatus from '../redux/selectors/selectTodoStatus.ts';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import {useAppSelector} from '../redux/hooks/useAppSelector.ts';
import LoadingScreen from './LoadingScreen.tsx';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  AddTodo: undefined;

  TodoDetails: {todoID: number};
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

function MyTodosScreen({navigation}: Props) {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(selectAllTodos());
  const status = useAppSelector(selectTodoStatus());

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(fetchTodos());
    });
  }, [dispatch, navigation]);

  function onAddNewTodo() {
    navigation.navigate('AddTodo');
  }

  function onTodoItemTapped(todoID: number) {
    navigation.navigate('TodoDetails', {todoID});
  }

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View>
        {todos.length === 0 ? (
          <Text style={globalStyles.bigTitle}>Du hast keine Todos.</Text>
        ) : (
          <View style={styles.todoItems}>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} onTap={onTodoItemTapped} />
            ))}
          </View>
        )}

        <View style={styles.button}>
          <Button title="Neues Todo" onPress={onAddNewTodo} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoItems: {
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: 50,
  },
});

export default MyTodosScreen;
