import {RootStackParamList} from '../types/rootStackParamList.ts';
import {UseNavigationType} from '../types/useNavigationType.ts';

export default function navigateAndReset(
  navigation: UseNavigationType,
  routeName: keyof RootStackParamList,
) {
  navigation.reset({
    index: 0,
    routes: [{name: routeName}],
  });
}
