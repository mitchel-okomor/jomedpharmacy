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
    <div className={css.orderhistory}>
        <ul>
          {data.data.map((item)=>{
              return <li><span className={css.product}>{item.productId}</span><span className={css.orderdate}>{item.date_created.substring(0, item.date_created.indexOf('T') != -1 ? item.date_created.indexOf('T'): item.date_created.length)}</span></li>
          })}
        </ul>
    </div>
)   
}
return <div className={css.orderhistory}>{data.message}</div>;

}

export default OrderHistory;