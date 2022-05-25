import { CartItemType } from '../../../types/cart-item-type';

export type CartState = {
  cartItems: CartItemType[],
};

export enum CartActionType {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CART_UPDATE_ITEM = 'CART_UPDATE_ITEM',
}

export type CartAddItemAction = {
  type: CartActionType.CART_ADD_ITEM,
  payload: {
    id: string,
    itemId: string,
    amount: number,
  }
};

export type CartRemoveItemAction = {
  type: CartActionType.REMOVE_FROM_CART,
  payload: {
    id: string,
    itemId: string,
  }
};

export type CartUpdateItemAction = {
  type: CartActionType.CART_UPDATE_ITEM,
  payload: {
    id: string,
    itemId: string,
    amount: number,
  }
};

export type CartAction = CartAddItemAction | CartUpdateItemAction | CartRemoveItemAction;
