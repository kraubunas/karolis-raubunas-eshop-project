/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { CartItem } from '../../../types/cart-item-type';
import { CartAction, CartActionType, CartState } from './types';

const initialState: CartState = {
  cartItems: [],
  joinedItems: [],
  products: [],
};

const cartReducer: Reducer<CartState, CartAction> = (state = initialState, action) => {
  const inCart = state.cartItems.find((itm) => (itm.itemId === action.payload.id));
  switch (action.type) {
    case CartActionType.ADD_TO_CART: {
      // const items = state.products.find((prod) => prod.id === action.payload.id);
      return {
        ...state,
        cartItems: inCart
          ? state.cartItems.map((item) => (item.itemId === action.payload.id
            ? { ...item, amount: item.amount + 1 } : item))
          : [...state.cartItems, { id: createId(), itemId: action.payload.id, amount: 1 }],
        // name: action.payload.name,
        // category: action.payload.category,
        // itemId: action.payload.itemId,
      };
    }

    case CartActionType.CART_UPDATE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => (
          item.itemId === action.payload.id
            ? { ...item, amount: action.payload.amount }
            : item
        )),
      };
    }

    case CartActionType.REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.itemId !== action.payload.id),
      };
    }

    default: return state;
  }
};

export default cartReducer;
