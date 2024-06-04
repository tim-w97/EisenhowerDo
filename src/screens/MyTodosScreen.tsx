import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import TodoItem from '../views/TodoItem.tsx';
import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles.ts';
import selectAllTodos from '../redux/selectors/selectAllTodos.ts';
import fetchTodos from '../redux/thunks/fetchTodos.ts';
import selectTodoStatus from '../redux/selectors/selectTodoStatus.ts';
import {useAppDispatch} from '../redux/hooks/useAppDispatch.ts';
import useAppSelector from '../redux/hooks/useAppSelector.ts';
import LoadingScreen from './LoadingScreen.tsx';
import {Todo} from '../types/todo.ts';
import FixedBottomButton from '../views/FixedBottomButton.tsx';
import getSortedTodos from '../utils/getSortedTodos.ts';
import fetchSharedTodos from '../redux/thunks/fetchSharedTodos.ts';
import selectSharedTodos from '../redux/selectors/selectSharedTodos.ts';

type StackParamList = {
  // undefined means that this screen doesn't receive any params
  AddTodo: undefined;

  TodoDetails: {todoID: number};
};

type Props = {
  navigation: NavigationProp<StackParamList>;
};

export default function MyTodosScreen({navigation}: Props) {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(selectAllTodos());
  const sharedTodos = useAppSelector(selectSharedTodos());
  const status = useAppSelector(selectTodoStatus());

  const fetchAllTodos = useCallback(() => {
    dispatch(fetchTodos());
    dispatch(fetchSharedTodos());
  }, [dispatch]);

  useFocusEffect(fetchAllTodos);

  useEffect(() => {
    fetchAllTodos();
  }, [fetchAllTodos]);

  function onAddNewTodo() {
    navigation.navigate('AddTodo');
  }

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  function renderTodoItem(itemInfo: ListRenderItemInfo<Todo>) {
    const todo = itemInfo.item;

    return <TodoItem key={todo.id} todo={todo} />;
  }

  // Combine users todos with shared todos
  const combinedTodos = todos.concat(
    sharedTodos.map(todo => ({...todo, isShared: true})),
  );

  return (
    <SafeAreaView style={[globalStyles.safeArea, styles.safeArea]}>
      {combinedTodos.length > 0 ? (
        <FlatList
          refreshing={false}
          onRefresh={fetchAllTodos}
          data={getSortedTodos(combinedTodos)}
          renderItem={renderTodoItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.noTodosInfoContainer}>
          <Text style={globalStyles.bigTitle}>Du hast keine Todos. 🥺</Text>
        </View>
      )}
      <FixedBottomButton text="Neues Todo" onTap={onAddNewTodo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 0,
  },
  noTodosInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  listContainer: {
    padding: 10,
    paddingBottom: 150,
  },
});
