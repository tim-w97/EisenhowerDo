import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../styles/globalStyles.ts';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FixedBottomButton from '../../views/FixedBottomButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {setOnboardingStatus} from '../../utils/storage.ts';
import text from '../../styles/text.ts';
import TodoItem from '../../views/TodoItem.tsx';
import {Todo} from '../../types/todo.ts';
import dummySharedTodos from '../../data/dummySharedTodos.ts';

export default function OnboardingScreen3() {
  const navigation = useNavigation();

  async function onLetsGo() {
    await setOnboardingStatus('seen');

    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }

  function renderTodoItem(itemInfo: ListRenderItemInfo<Todo>) {
    const todo = itemInfo.item;

    return <TodoItem key={todo.id} todo={todo} />;
  }

  return (
    <SafeAreaView style={[globalStyles.safeArea, styles.safeArea]}>
      <View style={styles.topTextContainer}>
        <Text style={[styles.bigBottomMargin, globalStyles.bigTitle]}>
          Sharing is Caring!
        </Text>
        <Text style={text.defaultText}>
          Du kannst deine Todos mit anderen Benutzern teilen. Todos, die mit dir
          geteilt wurden, erkennst du an dem Personensymbol:
        </Text>
      </View>
      <View>
        <FlatList
          data={dummySharedTodos}
          renderItem={renderTodoItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <Text style={[text.defaultText, styles.bottomText]}>
        Du kannst dieses Tutorial jederzeit erneut angucken. Tippe dazu einfach
        auf das Fragezeichen im Login-Bereich. Bist du bereit, loszulegen?
      </Text>
      <FixedBottomButton text="Los geht's!" onTap={onLetsGo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topTextContainer: {
    padding: 20,
    paddingBottom: 0,
  },
  bottomText: {
    padding: 20,
    paddingTop: 0,
  },
  bigBottomMargin: {
    marginBottom: 50,
  },
  safeArea: {
    padding: 0,
  },
  listContainer: {
    padding: 10,
  },
});
