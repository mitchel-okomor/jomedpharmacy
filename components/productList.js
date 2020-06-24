import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div>
       {this.props.products.map(item => <Product key={item.id} product={item}/>)}
        </div>
      )
  }
};
export default ProductList;