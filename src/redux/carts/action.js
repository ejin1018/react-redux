import { ADD_CART } from './type';

export const addCart = (number)=>{
  return {
    type: ADD_CART,
    payload:Number(number) //전송데이터 
  };
}