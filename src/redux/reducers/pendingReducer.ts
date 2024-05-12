import TodosState from '../../types/todosState.ts';
import UserState from '../../types/userState.ts';

export default function pendingReducer(state: UserState | TodosState) {
  state.status = 'loading';
  state.error = null;
}
