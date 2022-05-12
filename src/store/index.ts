import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import mainReducer from './main-reducer';

export { useRootSelector } from './hooks';

const store = createStore(
  mainReducer,
  composeWithDevTools(),
);

export default store;
