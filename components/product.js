import Link from "next/link";
import { useContext } from 'react';
import appContext from './appcontext';
import css from './product.module.scss';


const Product = (props) => {
  const { addToCart, total } = useContext(appContext);

 return (
    <div className={css.product}>
  <Link href="/products/[id]" as={`/products/${props.product.id}`}>
       <a>       
     
          <div className="card" style={{width: "18rem"}}>
            <img src={props.product.image? props.product.image :  "/product.png"} className="card-img-top" alt=""/>
            <div className="card-body">
              <b className="card-title">{props.product.name}</b><br />
              <b className="card-title">$ {props.product.price}</b>
            </div>
         
      </div>
      </a>
      </Link>  
      </div>
 );
}
export default Product;