import { ADD_CART } from './type';
const initState = {count:0}

const cartReducer = (state = initState, action)=>{
  switch (action.type){
    case ADD_CART:
      return{
        state,
        count: action.payload
      }
      default: return state;
  }
}

export default cartReducer;