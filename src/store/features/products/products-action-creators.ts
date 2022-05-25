/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import axios from 'axios';
import { AppAction } from '../../types';
import {
  ProductFetchItemsLoadingAction,
  ProductFetchItemsSuccessAction,
  ProductFetchItemsFailureAction,
  ProductsActionType,
} from './types';
import Product from '../../../types/products';
import pause from '../../../helpers/pause';

const productFetchItemsLoadingAction: ProductFetchItemsLoadingAction = {
  type: ProductsActionType.PRODUCT_FETCH_ITEMS_LOADING,
};

const createProductFecthItemsSuccessAction = (items: Product[]): ProductFetchItemsSuccessAction => ({
  type: ProductsActionType.PRODUCT_FETCH_ITEMS_SUCCESS,
  payload: { items },
});

export const productFetchItemsAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(productFetchItemsLoadingAction);

  const { data } = await axios.get<Product[]>('http://localhost:8000/products');
  await pause(2000);
  const productFecthItemsSuccessAction = createProductFecthItemsSuccessAction(data);
  dispatch(productFecthItemsSuccessAction);
};
