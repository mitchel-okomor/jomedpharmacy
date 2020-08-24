import { useContext } from "react";
import appContext from "../components/appcontext";
import css from "./prescriptionhistory.module.scss";
import Link from "next/link";


const PrescriptionHistory = () => {
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
                    alt=""
                    width="70"
                  />
                  <br />
                  <Link href="/products/[id]" as={`/products/${item.id}`}>
<a> {item.name}</a></Link>            
                </div>

              </td>
              <td >
                <strong>₦ {item.price}</strong>
              </td>
              <td>
                {item.quantity}
                </td>
            </tr>
           
          ))}
        </tbody>
      </table>
<br />
     <div className={css.total}> <strong >Total: ₦{carttotal}</strong>
</div>
<br />
      
     
     
    </div>
  );
};
export default PrescriptionHistory;
