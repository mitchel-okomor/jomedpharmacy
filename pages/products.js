import ProductList from '../components/productList.js'
import css from './products.module.scss'
import fetch from 'isomorphic-unfetch'
import Loading from '../components/loading';




const Products = (props)=>{

if(props.products.length <1 ) {
  return(<div className={css.products}>

   <Loading />
  </div>)
  
}
return(
    <div className={css.products}>
                < ProductList  products= {props.products}/>

    </div>

)

}

Products.getInitialProps = async function() {
  try{
const res = await fetch('http://localhost:4000/products');
    const data = await res.json();
    return {
      products: data.data
    };
  }catch{
console.log("Unable to load Products");
return {
  products:[]
};
  }
  
  


  };

export default Products;