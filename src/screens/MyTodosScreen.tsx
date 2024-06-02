import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import TodoItem from '../views/TodoItem.tsx';
import {NavigationProp} from '@react-navigation/native';
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

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(fetchTodos());
      dispatch(fetchSharedTodos());
    });
  }, [dispatch, navigation]);

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
      <FlatList
        data={getSortedTodos(combinedTodos)}
        renderItem={renderTodoItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
      <FixedBottomButton text="Neues Todo" onTap={onAddNewTodo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 0,
  },
  listContainer: {
    padding: 10,
    paddingBottom: 150,
  },
});
