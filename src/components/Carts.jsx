import React from 'react';
import {connect} from 'react-redux';
import { addCart } from '../redux';

function Carts({count,addCart}){
  const [number,setNumber] = React.useState(1);
  return(
    <div className='items'>
      <h1>Cart</h1>
      <p className='orderCount'> <span>주문 수량</span> {count}</p>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} className="orderAmount" />
      <button onClick={()=>{addCart(number)}} className="addBtn">수량 입력</button>
    </div>
  )
}

const mapStateToProps = ({cart}) => ({ count: cart.count })
const mapDispatchToProps = {
  addCart:(number)=>{return addCart(number)}
}
export default connect(mapStateToProps,mapDispatchToProps)(Carts);