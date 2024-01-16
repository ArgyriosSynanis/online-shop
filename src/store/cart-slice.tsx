import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as {
      id: string;
      price: number;
      quantity: number;
      totalPrice: number;
      title: string;
      description: string;
      thumbnail: string;
    }[],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: { id: string }) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          description: newItem.description,
          thumbnail: newItem.thumbnail,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(
        (item: { id: string }) => item.id === id
      );

      state.totalQuantity--;
      if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item: { id: string }) => item.id !== id
        );
      } else {
        if (existingItem) {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
