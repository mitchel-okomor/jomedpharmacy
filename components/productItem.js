import css from './productItem.module.scss';
import { useState, useContext, useEffect } from 'react';
import CartContext from './appcontext';


const ProductItem = (props) => {
  const {cart, addToCart, removeFromCart, removeFromTotal, total, closeNav} = useContext(CartContext);
let qtyInCart = "";
let presentInCart = false;
for(let i=0; i<=cart.length; i++){
  let id =props.product.product_id;
  console.log[i];
  if(cart[i] && cart[i].product_id ===id){
presentInCart = true;
qtyInCart = cart[i].quantity;
  }
}
console.log(presentInCart);


    return (
       <div className={css.productItem} onClick={closeNav}>
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
               {presentInCart?<button className={css.remove} onClick={() => {removeFromCart(props.product); removeFromTotal(props.product); }}>remove from cart
                </button>:""} 
                </div>
              
              <div>
                Qty in cart: {qtyInCart}
              </div>
         </div>
       </div>
    );
 }
 export default ProductItem;