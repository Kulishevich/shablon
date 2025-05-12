import { RootState } from '../store';

export const selectCartPriceWithOutDiscount = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

export const selectCartPriceWithDiscount = (state: RootState) =>
  state.cart.items.reduce((sum, elem) => {
    sum += Number(elem.price) * ((100 - Number(elem.discount)) / 100) * elem.quantity;
    return sum;
  }, 0);

export const selectCartCountProducts = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
