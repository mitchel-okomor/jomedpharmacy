import { useContext } from "react";
import appContext from "../components/appcontext";
import css from "./cart.module.scss";
import Link from "next/link";


const Cart = () => {
  const { cart, carttotal } = useContext(appContext);
  return (
    <div className={css.cart}>
      <h3>Cart Items</h3>
      <table className={css.table}>
        <thead>
          <tr>
            <th >
              <div >Product</div>
            </th>
            <th >
              <div >Price</div>
            </th>
            <th >
              <div >Quantity</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td >
                <div>
                  <img
                    src={item.image}
                    alt="item"
                    width="70"
                  />
                  <br />
                  <Link href="/products/[id]" as={`/products/${item.id}`}>
<a> {item.name}</a></Link>            
                </div>

              </td>
              <td className="border-0 align-middle">
                <strong>$ {item.price}</strong>
              </td>
              <td>
                {item.quantity}
                </td>
            </tr>
           
          ))}
        </tbody>
      </table>

      <ul className="list-unstyled mb-4">
        <li className="d-flex justify-content-between py-3 border-bottom">
          <strong className="text-muted">Total</strong>
          <h5 className="font-weight-bold">$ {carttotal}</h5>
        </li>
      </ul>
      <Link href="#" >
       <a className={css.checkout}>
        Procceed to checkout
      </a>
      </Link>
     
    </div>
  );
};
export default Cart;
