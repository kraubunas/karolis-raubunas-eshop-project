/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { ProductState, ProductAction } from './types';

const initialState: ProductState = {
  items: [],
  loading: false,
};

const productsReducer: Reducer<ProductState, ProductAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_FETCH_ITEMS_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'PRODUCT_FETCH_ITEMS_SUCCESS': {
      return {
        ...state,
        loading: false,
        items: action.payload.items,
      };
    }

    case 'PRODUCT_CHANGE_ITEM_AMOUNT': {
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.payload.id
          ? { ...item, amount: action.payload.amount }
          : item
        )),
      };
    }

    default: return state;
  }
};

export default productsReducer;
