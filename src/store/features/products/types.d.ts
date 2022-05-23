import Product from '../../../types/products';

export type ProductState = {
  productItems: Product[],
  loading: boolean
};

export type ProductFetchItemsLoadingAction = {
  type: 'PRODUCT_FETCH_ITEMS_LOADING'
};

export type ProductFetchItemsSuccessAction = {
  type: 'PRODUCT_FETCH_ITEMS_SUCCESS',
  payload: {
    items: Item[],
  }
};

export type ProductFetchItemsFailureAction = {
  type: 'PRODUCT_FETCH_ITEMS_FAILURE',
  payload: {
    error: string,
  }
};

export type ProductChangeItemAmountAction = {
  type: 'PRODUCT_CHANGE_ITEM_AMOUNT',
  payload: {
    id: string,
    amount: number
  },
};

export type ProductAction = ProductFetchItemsLoadingAction | ShopFetchItemssSuccessAction | ProductFetchItemsFailureAction | ProductChangeItemAmountAction;
