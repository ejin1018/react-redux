import React from 'react';
import {connect} from 'react-redux';
import { addCart } from '../redux/carts/action';

function Carts({count,addCart}){
  return(
    <div className='items'>
      <h1>Cart</h1>
      <p className='orderCount'> <span>주문 수량</span> {count}</p>
      <button onClick={()=>{addCart()}} className="addBtn">수량 추가</button>
    </div>
  )
}

const mapStateToProps = (state) => ({ count: state.cart.count })
const mapDispatchToProps = {
  addCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Carts);