/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { CartItem } from '../../../types/cart-item-type';
import { CartAction, CartActionType, CartState } from './types';

const initialState: CartState = {
  cartItems: [],
  joinedItems: [],
  // productItems: [],
};

const cartReducer: Reducer<CartState, CartAction> = (state = initialState, action) => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, {
          id: createId(),
          itemId: action.payload.itemId,
          price: action.payload.name,
          name: action.payload.price,
          category: action.payload.category,
          amount: action.payload.amount,
        }],
      };
    }

    case CartActionType.CART_UPDATE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => (
          item.id === action.payload.id
            ? { ...item, amount: action.payload.amount }
            : item
        )),
      };
    }

    case CartActionType.REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.itemId),
      };
    }

    default: return state;
  }
};

export default cartReducer;
