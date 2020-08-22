import Link from "next/link";
import css from './product.module.scss';
import Loading from "./loading";


const Product = ({product}) => {

  if(!product){
    return <Loading />
  }
 return (
    <div className={css.product}>
  <Link href="/products/[id]" as={`/products/${product.product_id}`}>
       <a>       
     
          <div className="card" style={{width: "18rem"}}>
            <img src={product.image? product.image :  "/product.png"} className="card-img-top" alt=""/>
            <div className="card-body">
              <b className="card-title">{product.name}</b><br />
              <b className="card-title">$ {product.price}</b>
            </div>
         
      </div>
      </a>
      </Link>  
      </div>
 );
}
export default Product;