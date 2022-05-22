/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { CartItemType } from '../../../types/cart-item-type';
import { CartAction, CartState } from './types';

const initialState: CartState = {
  cart: [],
};

const cartReducer: Reducer<CartState, CartAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const inCart = state.cart.find((itm: CartItemType) => (itm.itemId === action.payload.id));
      return {
        ...state,
        cart: inCart ? state.cart.map((item) => (item.itemId === action.payload.id
          ? { ...item, amount: item.amount + 1 } : item))
          : [...state.cart, { id: createId(), itemId: action.payload.id, amount: 1 }],
      };
    }

    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter((item) => item.itemId !== action.payload.id),
      };
    }

    case 'CART_UPDATE_ITEM': {
      return {
        ...state,
        cart: state.cart.map((item) => (item.itemId === action.payload.id
          ? { ...item, amount: action.payload.amount }
          : item)),
      };
    }

    default: return state;
  }
};

export default cartReducer;
