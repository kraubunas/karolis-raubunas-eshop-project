/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import { AppAction, RootState } from '../../types';
import Product from '../../../types/products';

export const createModifyCartItemAction = (productsItemId: string, newAmount: number) => (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): void => {
  const { products, cart } = getState();

  const existingCartItem = cart.cartItems.find((x) => x.itemId === productsItemId);
  const productsItem = products.productItems.find((x) => x.id === productsItemId) as Product;

  const totalAmount = existingCartItem ? existingCartItem.amount + productsItem.amount : productsItem.amount;
  const amountLeft = totalAmount - newAmount;

  if (existingCartItem) {
    dispatch({
      type: 'CART_UPDATE_ITEM',
      payload: { cartItemId: existingCartItem.id, amount: newAmount },
    });
  } else {
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { shopItemId: productsItemId, amount: newAmount },
    });
  }

  dispatch({
    type: 'SHOP_CHANGE_ITEM_AMOUNT',
    payload: { id: productsItemId, amount: amountLeft },
  });
};
