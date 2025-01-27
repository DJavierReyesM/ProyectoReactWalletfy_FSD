import { configureStore, combineReducers } from '@reduxjs/toolkit';

import ThemeSlice from '@store/slice/theme';

const rootReducer = combineReducers({
  theme: ThemeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;


