import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import TodoListEntry from '../views/TodoListEntry.tsx';
import dummyTodos from '../sampleData/dummyTodos.json';

function MyTodosScreen() {
  return (
    <SafeAreaView>
      <View style={styles.listContainer}>
        {dummyTodos.map(todo => (
          <TodoListEntry styles={styles.listEntry} key={todo.id} todo={todo} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
  },
  listEntry: {
    margin: 10,
  },
});

export default MyTodosScreen;
