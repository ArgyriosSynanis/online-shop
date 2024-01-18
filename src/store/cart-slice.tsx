import { createSlice } from '@reduxjs/toolkit';
import { ProductItem } from '../types/Product.types';

export interface CartItems extends ProductItem {
  quantity: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as CartItems[],
    totalQuantity: 0,
    cartTotal: 0,
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

      state.cartTotal = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
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
        if (existingItem && existingItem.totalPrice) {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
      state.cartTotal = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
