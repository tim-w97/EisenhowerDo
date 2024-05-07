import {useSelector} from 'react-redux';
import {RootState} from '../types/rootState.ts';

export const useAppSelector = useSelector.withTypes<RootState>();
