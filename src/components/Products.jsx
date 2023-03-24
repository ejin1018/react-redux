import React from 'react';
import {connect} from 'react-redux';

function Products(props){
  return(
    <div className='items'>
      <h1>Products</h1>
      <p>주문 수량 {props.count}</p>
      <button>주문하기</button>
    </div>
  )
}

const mapStateToProps = (state) => ({ count: state.count })
export default connect(mapStateToProps)(Products);