import { createSlice } from '@reduxjs/toolkit';
import store from '.';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const uiActions = uiSlice.actions;

export default uiSlice;
