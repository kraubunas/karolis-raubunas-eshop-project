/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import Product from '../../../types/products';
import { AppAction, RootState } from '../../redux-types';
import {
  CartActionType, CartAddItemAction, CartUpdateItemAction, CartRemoveItemAction,
} from './types';
import { CartItem } from '../../../types/cart-item-type';

export const createAddToCartAction = (item: CartItem): CartAddItemAction => ({
  type: CartActionType.ADD_TO_CART,
  payload: {
    itemId: item.itemId,
    id: item.id,
    amount: item.amount,
  },
});

export const createCartUpdateItemAction = (item: CartItem): CartUpdateItemAction => ({
  type: CartActionType.CART_UPDATE_ITEM,
  payload: {
    itemId: item.itemId,
    id: item.id,
    amount: item.amount,
  },
});

export const removeFromCart = (item: CartItem): CartRemoveItemAction => ({
  type: CartActionType.REMOVE_FROM_CART,
  payload: {
    itemId: item.itemId,
    id: item.id,
    amount: item.amount,
  },
});

// export const createAddToCartActionThunk = (itemId: string, id: string, amount: number, name: string, category: string, price: string) => (
//   dispatch: Dispatch<AppAction>,
//   getStore: () => RootState,
// ): void => {
// // POanaudodami funkcija getStore, suraskite item'1 pagal itemId ir sukurkite reikaling1 CArtItem
//   const { products, cart } = getStore();
//   const inCart = cart.cartItems.find((itm) => ((itm.id === itemId)));
//   const productsItem = products.productItems.find((x) => x.id === itemId) as Product;

//   const totalAmount = inCart ? inCart.amount + productsItem.amount : productsItem.amount;

//   if (inCart) {
//     if (amount > 0) {
//       const cartUpdateItemAction = createCartUpdateItemAction();
//       dispatch(cartUpdateItemAction);
//     } else {
//       const removeFromCartAction = removeFromCart(inCart.itemId, inCart.id, amount, name, category, price);
//       dispatch(removeFromCartAction);
//     }
//   } else {
//     const addToCartAction = createAddToCartAction(id, itemId, amount, name, category, price);
//     dispatch(addToCartAction);
//   }
// };
