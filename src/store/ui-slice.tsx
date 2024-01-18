import { createSlice } from '@reduxjs/toolkit';
import { store } from '.';

type UiState = {
  cartIsVisible: boolean;
};

const initialState: UiState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const uiActions = uiSlice.actions;

export default uiSlice;
