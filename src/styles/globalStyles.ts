import {StyleSheet} from 'react-native';
import colors from './colors.ts';
import shadows from './shadows.ts';
import text from './text.ts';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
    ...colors.primaryBackground,
  },

  bigTitle: {
    fontWeight: 'bold',
    ...text.bigTitle,
  },

  textInput: {
    borderRadius: 5,
    padding: 15,
    ...colors.brightBackground,
    ...shadows.defaultShadow,
    ...text.defaultText,
  },

  actionButton: {
    padding: 10,
    color: 'blue',
  },
});
