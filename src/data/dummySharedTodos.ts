import {Todo} from '../types/todo.ts';

export default [
  {
    id: 1,
    title: 'Hey Tim, kauf mir Schoki!',
    text: 'Hallo Welt',
    isImportant: true,
    isUrgent: true,
    isShared: true,
  },
  {
    id: 2,
    title: 'Bring mal Toastbrot mit!',
    text: 'Hallo Welt',
    isImportant: true,
    isUrgent: false,
    isShared: true,
  },
] as Todo[];
