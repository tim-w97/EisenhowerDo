import Todo from '../types/todo.ts';

let dummyTodos: Todo[] = [
  {
    title: 'Hausaufgaben machen',
    text: 'Mathe, Deutsch und Englisch',
    isImportant: true,
    isUrgent: false,
    isCompleted: false,
  },
  {
    title: 'Einkaufen gehen',
    text: 'Ich habe kein Essen mehr',
    isImportant: false,
    isUrgent: true,
    isCompleted: false,
  },
  {
    title: 'Mit Bello Gassi gehen',
    text: 'Draußen ist schönes Wetter',
    isImportant: true,
    isUrgent: true,
    isCompleted: false,
  },
  {
    title: 'Kaffee kochen',
    text: 'Ich bin sooo müde',
    isImportant: false,
    isUrgent: true,
    isCompleted: false,
  },
  {
    title: 'Runde um den Block gehen',
    text: 'Etwas Sonne tanken',
    isImportant: false,
    isUrgent: false,
    isCompleted: false,
  },
];

export default dummyTodos;
