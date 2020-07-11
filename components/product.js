import Link from "next/link";
import { useContext } from 'react';
import appContext from './appcontext';

const Product = (props) => {
  const { addToCart, total } = useContext(appContext);

 return (
      <div className="col-sm-4">
          <div className="card" style={{width: "18rem"}}>
            <img src={props.product.image} className="card-img-top" alt="medicine"/>
            <div className="card-body">
              <h5 className="card-title">{props.product.name}</h5>
              <h6 className="card-title">$ {props.product.price}</h6>
              <Link href="/products/[id]" as={`/products/${props.product.id}`}>
                  <a>View Item &rarr;</a>
              </Link>
              <Link href="/products/[id]" as={`/products/${props.product.add}`}>
                  <a onClick={() => {addToCart(props.product); total(props.product.price); }}>Add To Cart &rarr;</a>
              </Link>
            </div>
          </div>
      </div>
 );
}
export default Product;