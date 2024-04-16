import Todo from '../types/todo.ts';

const initialTodos: Todo[] = [
  {
    id: '676c67c9-73f4-4984-9608-0f3b9c2de8ad',
    title: 'Hausaufgaben machen',
    text: 'Mathe, Deutsch und Englisch',
    isImportant: true,
    isUrgent: false,
    isCompleted: false,
  },
  {
    id: '70707a90-dce2-48b5-b336-2e41113824f4',
    title: 'Einkaufen gehen',
    text: 'Ich habe kein Essen mehr',
    isImportant: false,
    isUrgent: true,
    isCompleted: false,
  },
  {
    id: '2c3bbfeb-3ee4-4fba-8ce7-cf2c44d7902f',
    title: 'Mit Bello Gassi gehen',
    text: 'Draußen ist schönes Wetter',
    isImportant: true,
    isUrgent: true,
    isCompleted: false,
  },
];

export default initialTodos;
