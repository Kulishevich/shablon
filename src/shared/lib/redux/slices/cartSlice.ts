import { ProductT } from '@/shared/api/product/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartProduct = ProductT & { quantity: number };

export type CartStateT = {
  items: CartProduct[];
};

export const initialState: CartStateT = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    hydrateCart: (state, action: PayloadAction<CartProduct[]>) => {
      state.items = action.payload;
    },
    addInCart: (state, action: PayloadAction<CartProduct>) => {
      const productInCart = state.items.find((elem) => elem.id === action.payload.id);
      const productIndex = state.items.findIndex((elem) => elem.id === action.payload.id);

      if (!!productInCart) {
        const newArr = [
          ...state.items.slice(0, productIndex),
          { ...productInCart, quantity: productInCart.quantity + 1 },
          ...state.items.slice(productIndex + 1),
        ];
        state.items = newArr;
      } else {
        const newArr = [...state.items, action.payload];
        state.items = newArr;
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const newArr = state.items.filter((elem) => elem.id !== action.payload);

      state.items = newArr;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addInCart, deleteFromCart, clearCart, hydrateCart } = cartSlice.actions;

export default cartSlice.reducer;
