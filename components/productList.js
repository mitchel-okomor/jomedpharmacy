import React, { Component } from 'react';
import Product from './Product';
import css from './productList.module.scss';


class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div className={css.productlist}>
       {this.props.products.map(item => <Product key={item.product_id} product={item}/>)}
        </div>
      )
  }
};
export default ProductList;