import { CartItemType } from '../../../types/cart-item-type';

export type CartState = {
  cart: CartItemType[],
};

export type CartAddItemAction = {
  type: 'CART_ADD_ITEM',
  payload: {
    id: string,
    itemId: string,
    amount: number,
  }
};

export type CartRemoveItemAction = {
  type: 'REMOVE_FROM_CART',
  payload: {
    id: string,
    itemId: string,
    amount: number,
  }
};

export type CartUpdateItemAction = {
  type: 'CART_UPDATE_ITEM',
  payload: {
    id: string,
    itemId: string,
    amount: number,
  }
};

export type CartAction = CartAddItemAction | CartUpdateItemAction | CartRemoveItemAction;
