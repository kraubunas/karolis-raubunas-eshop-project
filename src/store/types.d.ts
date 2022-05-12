import { CartItem } from '../types/cart-item';
import Product from '../types/products';

export type State = {
  products: Product[],
  cart: CartItem[],
};

export type Action = {
  type: string,
  payload: any,
};
