import {useSelector} from 'react-redux';
import {RootState} from '../types/rootState.ts';

export default useSelector.withTypes<RootState>();
