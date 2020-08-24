import {useState, useEffect} from "react";
import css from './orderhistory.module.scss';


const OrderHistory = () =>{
const [data, setData] = useState("");
useEffect( ()=>{
fetchData();

}, [])


const fetchData =async ()=>{
  const res = await fetch("http://localhost:4000/orderhistory/1", {
      method:"GET",
      headers: {
        'Content-Type': 'application/json'
      },
  });
  const data = await res.json();
  console.log(data);
  setData(data);
}

if(data.data){
 return(
    <div >
        <ul className={css.order_history}>
          {data.data.map((item)=>{
              return <li><div className={css.product}>{item.productId}</div> <div className={css.orderdate}> {item.date_created.substring(0, item.date_created.indexOf('T') != -1 ? item.date_created.indexOf('T'): item.date_created.length)}</div></li>
          })}
        </ul>
    </div>
)   
}
return <div className={css.order_history}>{data.message}</div>;

}

export default OrderHistory;