import css from './productItem.module.scss';
import { useContext } from 'react';
import CartContext from './appcontext';

const ProductItem = (props) => {
  const { addToCart, removeFromCart, removeFromTotal, total } = useContext(CartContext);

    return (
       <div className={css.productItem}>
         <div className={css.image}>
             <div className="card">
               <img src={props.product.image_url || "/product.png"} className="card-img-top" alt=""/>
               <h5>{props.product.name}</h5>
                 <h6>₦ {props.product.price}</h6>
             </div>
         </div>
          <div className={css.item}>
               <div>
                <h2> <u>Product Description:</u></h2>
                 <p>{props.product.description}</p>
                 </div>
                 <div>   <button className={css.add} onClick={() => {addToCart(props.product); total(props.product.price); }}>Add to Cart
                </button>
                <button className={css.remove} onClick={() => {removeFromCart(props.product); removeFromTotal(props.product); }}>remove from cart
                </button>
                </div>
              
              <div>
                Qty in cart: 
              </div>
         </div>
       </div>
    );
 }
 export default ProductItem;