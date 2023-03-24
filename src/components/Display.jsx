import React from 'react';
import {connect} from 'react-redux';

function Products({count}){
  return(
    <div className='items'>
      <h1>Display</h1>
      <p className='orderCount'> <span>상품 수량</span> {count}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({ count: state.product.count })

export default connect(mapStateToProps)(Products);