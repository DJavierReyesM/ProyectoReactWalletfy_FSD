import type { RootState } from '@store/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialAmount } from '@customTypes/initialAmount';

const initialState: InitialAmount = {
  value: 0
};

export const amountSlice = createSlice({
  name: 'amount',
  initialState: () => {
    try {
      const localStorageAmount = localStorage.getItem("iAmount");

      if (localStorageAmount) {
        return { value: JSON.parse(localStorageAmount) };
      }

      return initialState; 
    } catch (err) {
      console.error("Error parsing local storage initial amount", err);
      localStorage.removeItem("iAmount"); 
      return initialState; 
    }
  },
  reducers: {
    setInitialAmount: (state, action: PayloadAction<InitialAmount['value']>) => {
      state.value = action.payload;
      localStorage.setItem("iAmount", JSON.stringify(action.payload));
    },
  },
});

export const amountAction = amountSlice.actions;

export const selectInitialAmount = (state: RootState) => state.amount.value

export default amountSlice.reducer;