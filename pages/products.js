import ProductList from '../components/productList.js'
import css from './products.module.scss'
import fetch from 'isomorphic-unfetch'
import Loading from '../components/loading';




const Products = (props)=>{

if(props.products.length <1 ) {
  return <Loading />
  
}
return(

    <div className={css.products}>

      <h1 className={css.featured_products}>Featured products</h1>
 <div>
      <h2>Antibiotics</h2>
      < ProductList  products= {props.products}/>
    </div>
    <div>
      <h2>Antimaleria</h2>
    </div>
    <div>
      <h2>Antidiabetics</h2>
    </div>
    <div>
      <h2>Haematenics</h2>
    </div>
    <div>
      <h2></h2>
    </div>
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