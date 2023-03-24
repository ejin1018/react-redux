import React from 'react';
import {connect} from 'react-redux';
import { addProduct,removeProduct,resetProduct } from '../redux/products/actions';

function Products({count,addProduct,removeProduct,resetProduct}){
  return(
    <div className='items'>
      <h1>Products</h1>
      <p className='orderCount'> <span>상품 수량</span> {count}</p>
      <button onClick={()=>{addProduct()}} className="addBtn">수량 추가</button>
      <button onClick={()=>{ count <= 0 ? resetProduct() : removeProduct();}} className="removeBtn">수량 삭제</button>
      <button onClick={()=>{resetProduct()}} className="resetBtn">수량 초기화</button>
    </div>
  )
}

const mapStateToProps = ({product}) => {return {count: product.count}}
// 객체형식 디스패치
const mapDispatchToProps = {
  addProduct,
  removeProduct,
  resetProduct
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);