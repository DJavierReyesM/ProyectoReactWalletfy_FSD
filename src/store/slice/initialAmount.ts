import type { RootState } from '@store/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialAmount } from '@customTypes/initialAmount';

const initialState: InitialAmount = {
  value: 0,
};

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    setInitialAmount: (state, action: PayloadAction<InitialAmount['value']>) => {
      state.value = action.payload;
    },
  },
});

export const amountAction = amountSlice.actions;

export const selectInitialAmount = (state: RootState) => state.amount.value

export default amountSlice.reducer;