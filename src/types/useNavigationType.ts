import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from './rootStackParamList.ts';

export type UseNavigationType = Omit<
  NavigationProp<RootStackParamList>,
  'getState'
> & {
  getState():
    | Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[];
        routes: Array<{key: string; name: string}>;
        type: string;
        stale: false;
      }>
    | undefined;
};
