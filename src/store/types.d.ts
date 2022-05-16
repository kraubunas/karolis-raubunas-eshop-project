import { CartItemType } from '../types/cart-item-type';
import Product from '../types/products';

export type State = {
  products: Product[],
  cart: CartItemType[],
};

export type Action = {
  type: string,
  payload: any,
};
