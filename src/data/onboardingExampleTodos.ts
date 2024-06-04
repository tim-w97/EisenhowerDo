import {Todo} from '../types/todo.ts';

export default [
  {
    id: 1,
    title: 'Wichtig und dringend',
    text: 'Hallo Welt',
    isImportant: true,
    isUrgent: true,
    isShared: false,
  },
  {
    id: 2,
    title: 'Nur wichtig',
    text: 'Hallo Welt',
    isImportant: true,
    isUrgent: false,
    isShared: false,
  },
  {
    id: 3,
    title: 'Nur dringend',
    text: 'Hallo Welt',
    isImportant: false,
    isUrgent: true,
    isShared: false,
  },
  {
    id: 4,
    title: 'Weder wichtig noch dringend',
    text: 'Hallo Welt',
    isImportant: false,
    isUrgent: false,
    isShared: false,
  },
] as Todo[];
