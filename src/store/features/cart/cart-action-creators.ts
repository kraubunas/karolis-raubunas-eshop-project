/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import Product from '../../../types/products';
import { AppAction, RootState } from '../../redux-types';
import { CartActionType, CartAddItemAction } from './types';

export const createAddToCartAction = (itemId: string, id: string, amount: number, name: string, category: string, price: string): CartAddItemAction => ({
  type: CartActionType.ADD_TO_CART,
  payload: {
    itemId, id, amount, name, category, price,
  },
});

export const createCartUpdateItemAction = (itemId: string, id: string, amount: number, name: string, category: string, price: string) => ({
  type: CartActionType.CART_UPDATE_ITEM,
  payload: {
    itemId, id, amount, name, category, price,
  },
});

export const removeFromCart = (itemId: string, id: string, amount: number, name: string, category: string, price: string) => ({
  type: CartActionType.REMOVE_FROM_CART,
  payload: {
    itemId, id, amount, name, category, price,
  },
});

export const createAddToCartActionThunk = (itemId: string, id: string, amount: number, name: string, category: string, price: string) => (
  dispatch: Dispatch<AppAction>,
  getStore: () => RootState,
): void => {
// POanaudodami funkcija getStore, suraskite item'1 pagal itemId ir sukurkite reikaling1 CArtItem
  const { products, cart } = getStore();
  const inCart = cart.cartItems.find((itm) => ((itm.id === itemId)));
  const productsItem = products.productItems.find((x) => x.id === itemId) as Product;

  const totalAmount = inCart ? inCart.amount + productsItem.amount : productsItem.amount;

  if (inCart) {
    if (amount > 0) {
      const cartUpdateItemAction = createCartUpdateItemAction(inCart.id, inCart.itemId, amount, name, category, price);
      dispatch(cartUpdateItemAction);
    } else {
      const removeFromCartAction = removeFromCart(inCart.itemId, inCart.id, amount, name, category, price);
      dispatch(removeFromCartAction);
    }
  } else {
    const addToCartAction = createAddToCartAction(id, itemId, amount, name, category, price);
    dispatch(addToCartAction);
  }
};
