import { CartItemType } from '../../../types/cart-item-type';

export type CartState = {
  items: CartItemType[],
};

export type CartAddItemAction = {
  type: 'CART_ADD_ITEM',
  payload: {
    productsItemId: string,
    amount: number,
  }
};

export type CartUpdateItemAction = {
  type: 'CART_UPDATE_ITEM',
  payload: {
    cartItemId: string,
    amount: number,
  }
};

export type CartAction = CartAddItemAction | CartUpdateItemAction;
