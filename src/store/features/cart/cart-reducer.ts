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

// const cartReducer: Reducer<CartState, CartAction> = (state = initialState, action) => {
//   switch (action.type) {
//     case CartActionType.ADD_TO_CART:
//       // const item = state.productItems.find((prod) => prod.id === action.payload.itemId);
//       // eslint-disable-next-line no-unneeded-ternary
//       // const inCart = state.cartItems.find((itm) => ((itm.id === action.payload.itemId) ? true : false));
//       return {
//         ...state,
//         cartItems: [...state.productItems, {
//           productId: createId(),
//           cartItemId: action.payload.itemId,
//           amount: action.payload.amount,
//         }],
//         // ...state,
//         // cart: inCart
//         //   ? state.cartItems.map((itm) => (itm.id === action.payload.itemId
//         //     ? { ...itm, qty: itm.amount + 1 }
//         //     : itm))
//         //   : [...state.cartItems, { ...item, qty: 1 }],
//       };
//     case CartActionType.REMOVE_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((itm) => (itm.itemId !== action.payload.itemId)),
//         // cart: state.cartItems.filter((itm) => itm.id !== action.payload.itemId),
//       };
//     case CartActionType.CART_UPDATE_ITEM:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((itm) => (
//           itm.itemId === action.payload.itemId
//             ? { ...itm, amount: action.payload.amount }
//             : itm
//         )),
//         // cart: state.cartItems.map((itm) => (itm.id === action.payload.itemId ? { ...itm, qty: action.payload.amount } : itm)),
//       };
//     default: return state;
//   }
// };

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
