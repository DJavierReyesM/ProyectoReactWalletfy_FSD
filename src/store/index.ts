import { configureStore, combineReducers } from '@reduxjs/toolkit';

import ThemeSlice from '@store/slice/theme';
import AmountSlice from '@store/slice/initialAmount'

const rootReducer = combineReducers({
  amount: AmountSlice,
  theme: ThemeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;


