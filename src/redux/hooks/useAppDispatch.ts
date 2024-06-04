import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/appDispatch.ts';

export default useDispatch.withTypes<AppDispatch>();
