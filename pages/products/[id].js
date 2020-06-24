import fetch from 'isomorphic-unfetch';
import ProductItem from '../../components/productItem'
const Productitem = props => {
  return (
        <ProductItem product={props.product}/>
  )
};
Productitem.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:4000/product/${id}`);
  const product = await res.json();
  console.log(product);
  return product.data;
};
export default Productitem;