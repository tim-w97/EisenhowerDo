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
import text from '../../styles/text.ts';
import TodoItem from '../../views/TodoItem.tsx';
import onboardingTodos from '../../data/onboardingTodos.ts';
import {Todo} from '../../types/todo.ts';

export default function OnboardingScreen2() {
  const navigation = useNavigation();

  function onContinue() {
    navigation.navigate('Onboarding3');
  }

  function renderTodoItem(itemInfo: ListRenderItemInfo<Todo>) {
    const todo = itemInfo.item;

    return <TodoItem key={todo.id} todo={todo} />;
  }

  return (
    <SafeAreaView style={[globalStyles.safeArea, styles.safeArea]}>
      <View style={styles.topTextContainer}>
        <Text style={[styles.bigBottomMargin, globalStyles.bigTitle]}>
          Die Eisenhower-Matrix
        </Text>
        <Text style={text.defaultText}>
          Die Eisenhower-Matrix ist ein bewährtes Werkzeug zur Priorisierung
          deiner Aufgaben. Sie unterteilt Aufgaben in vier Kategorien:
        </Text>
      </View>
      <View>
        <FlatList
          data={onboardingTodos}
          renderItem={renderTodoItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <Text style={[text.defaultText, styles.bottomText]}>
        Mit dieser Methode helfe ich dir, dich auf das Wesentliche zu
        konzentrieren und effizienter zu arbeiten.
      </Text>
      <FixedBottomButton text="Weiter" onTap={onContinue} />
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
