/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { Action, State } from './types';

const initialState: State = {
  products: [
    {
      id: '1',
      name: 'Biciu vasko zvake',
      category: 'zvakes',
      price: '10.99€',
      image: ['https://cdn.lisaangel.co.uk/image/cache/data/product-images/ss21/sd-ss21/set-of-three-beeswax-candles-0v8a9980-900x900.jpg'],
    },
    {
      id: '2',
      name: 'Betono zvakide',
      category: 'zvakides',
      price: '10.99€',
      image: ['https://images.squarespace-cdn.com/content/v1/5771082d9de4bb4c71ed99ea/1608494085664-RNLTKEG1EODN9HJP6HCG/Hexagonal%2BHoneycomb%2Band%2BBees%2BBeeswax%2BCandle.jpg?format=1500w'],
    },
    {
      id: '3',
      name: 'Betoninis padekliukas',
      category: 'zvakides',
      price: '10.99€',
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvqpY8jxZ4vF53WBZGG9OULqPg_NXy0TbOg&usqp=CAU'],
    },

  ],
};

const mainReducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state;
    case 'REMOVE_ITEM':
      return state;
    case 'UPDATE_ITEM':
      return state;

    default:
      return state;
  }
};

export default mainReducer;
