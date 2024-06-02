import Snackbar from 'react-native-snackbar';
import colors from '../styles/colors.ts';

export default function showSnackbar(text: string): void {
  Snackbar.show({
    text,
    backgroundColor: colors.secondary.backgroundColor,
    textColor: colors.darkText.color,
  });
}
