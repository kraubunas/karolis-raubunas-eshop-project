/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import { AppAction, RootState } from '../../types';
import Product from '../../../types/products';
import {
  CartActionType, CartAddItemAction, CartRemoveItemAction, CartUpdateItemAction,
} from './types';

const createCartAddItemAction = (id: string, itemId: string, amount: number): CartAddItemAction => ({
  type: CartActionType.CART_ADD_ITEM,
  payload: { id, itemId, amount },
});

const createCartUpdateItemAction = (id: string, itemId: string, amount: number): CartUpdateItemAction => ({
  type: CartActionType.CART_UPDATE_ITEM,
  payload: { id, itemId, amount },
});

const createCartRemoveItemAction = (id: string, itemId: string): CartRemoveItemAction => ({
  type: CartActionType.REMOVE_FROM_CART,
  payload: { id, itemId },
});

export const createModifyCartItemAction = (cartItemId: string, productsItemId: string, newAmount: number) => (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): void => {
  const { products, cart } = getState();

  const existingCartItem = cart.cartItems.find((x) => x.itemId === productsItemId);
  const productsItem = products.productItems.find((x) => x.id === productsItemId) as Product;

  const totalAmount = existingCartItem ? existingCartItem.amount + productsItem.amount : productsItem.amount;
  const amountLeft = totalAmount - newAmount;

  if (existingCartItem) {
    if (newAmount > 0) {
      const cartUpdateItemAction = createCartUpdateItemAction(existingCartItem.id, productsItem.id, newAmount);
      dispatch(cartUpdateItemAction);
    } else {
      const cartRemoveItemAction = createCartRemoveItemAction(existingCartItem.id, productsItem.id);
      dispatch(cartRemoveItemAction);
    }
  } else {
    const cartAddItemAction = createCartAddItemAction(cartItemId, productsItemId, newAmount);
    dispatch(cartAddItemAction);
  }

  // const productsChangeItemAmountAction = createProductsChangeItemAmountAction(productsItemId, amountLeft);
  // dispatch(productsChangeItemAmountAction)
};
