import ProductList from '../components/productList.js'
import css from './products.module.scss'
import fetch from 'isomorphic-unfetch'




const Products = (props)=>{
return(
    <div className={css.products}>
                < ProductList  products= {props.products}/>

    </div>

)

}

Products.getInitialProps = async function() {
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();
    console.log(data);
    return {
      products: data.data
    };
  };

export default Products;