import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/appDispatch.ts';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
