import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../types';

export interface initialState {
  items: Array<Product>;
}

const initialState: initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<any>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<any>) => {
      const index = state.items.findIndex(
        (basketItem: Product) => basketItem.id === action.payload,
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload}) as its not in basket!`,
        );
      }

      state.items = newBasket;
    },
  },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

export const selectBasketItems = (state: any) => state.basket.items;
export const selectBasketItemsWithId = (state: any, id: number) =>
  state.basket.items.filter((item: Product) => item.id === id);

export const selectBasketTotal = (state: any) =>
  state.basket.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0,
  );

export default basketSlice.reducer;
