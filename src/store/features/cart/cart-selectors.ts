/* eslint-disable import/prefer-default-export */
import { RootState } from '../../types';

export const selectCartItems = (state: RootState) => state.cart.cartItems;
