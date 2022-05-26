import { CartItemJoined } from '../../../types/cart-item-joined';
import { CartItem } from '../../../types/cart-item-type';
import Product from '../../../types/products';

export type CartState = {
  cartItems: CartItem[],
  joinedItems: CartItemJoined[],
};

export enum CartActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CART_UPDATE_ITEM = 'CART_UPDATE_ITEM',
}

export type CartAddItemAction = {
  type: CartActionType.ADD_TO_CART,
  payload: {
    itemId: string,
    id: string,
    amount: number,
    price: string,
    category: string,
    name: string,
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
