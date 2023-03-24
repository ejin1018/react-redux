import { ADD_CART } from './type';

export const addCart = ()=>{
  return {
    type: ADD_CART,
    // payload:Number() //전송데이터 
  };
}