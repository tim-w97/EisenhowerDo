import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  safeArea: {
    padding: 20,
  },

  bigTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  textInput: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'lightblue',
    padding: 15,
  },

  actionButton: {
    padding: 10,
    color: 'blue',
  },
});

export default globalStyles;
