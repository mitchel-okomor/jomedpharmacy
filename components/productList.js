import React, { Component } from 'react';
import Product from './product';
import css from './productList.module.scss';


class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div className={css.productlist}>
          <div className="container-fluid">
<div className="row">
  <div className="d-flex flex-wrap">
       {this.props.products.map(item => <Product key={item.product_id} product={item}/>)}

  </div>
</div>
          </div>
        </div>
      )
  }
};
export default ProductList;