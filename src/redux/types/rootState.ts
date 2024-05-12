// Infer the `RootState` and `AppDispatch` types from the store itself
import store from '../store.ts';

export type RootState = ReturnType<typeof store.getState>;
