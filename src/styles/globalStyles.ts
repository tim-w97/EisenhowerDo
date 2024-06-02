import {StyleSheet} from 'react-native';
import colors from './colors.ts';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
    ...colors.primaryBackground,
  },

  bigTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  textInput: {
    borderRadius: 5,
    padding: 15,
    ...colors.brightBackground,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  actionButton: {
    padding: 10,
    color: 'blue',
  },

  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
