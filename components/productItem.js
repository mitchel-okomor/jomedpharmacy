import css from './productItem.module.scss';

const ProductItem = (props) => {
    console.log("props: " + props.product);
    return (
       <div className={css.productItem}>
         <div className={css.image}>
             <div className="card" style={{width: "18rem"}}>
               <img src={props.product.image_url } className="card-img-top" alt="shirt"/>
             </div>
         </div>
          <div className={css.item}>
               <div className="card-body" style={{marginTop: "135px"}}>
                 <h5 className="card-title">{props.product.name}</h5>
                 <h6 className="card-title">$ {props.product.price}</h6>
                 <p>{props.product.description}</p>
                 <button className="btn btn-large btn-primary">Add To Cart</button>
               </div>
         </div>
       </div>
    );
 }
 export default ProductItem;