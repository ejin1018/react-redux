import { ADD_PRODUCT, REMOVE_PRODUCT, RESET_PRODUCT } from './type';
const initState = {count:0}

const productReducer = (state = initState,action)=>{
  switch(action.type){
    case ADD_PRODUCT:
    return{
      state,
      count:state.count + 1
    }
    case REMOVE_PRODUCT:
    return{
      state,
      count:state.count - 1
    }
    case RESET_PRODUCT:
    return{
      state,
      count:initState.count
    }
    default: return state;
  }
}

export default productReducer;