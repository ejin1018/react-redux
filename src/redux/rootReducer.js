import { combineReducers } from 'redux';
import productReducer from './products/reducer';
import cartReducer from './carts/reducer';

const rootReducer = combineReducers({
  product : productReducer,
  cart : cartReducer
})

export default rootReducer;