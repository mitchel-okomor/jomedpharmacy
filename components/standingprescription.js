import {useState, useEffect} from "react";
import css from './standingprescription.module.scss';


const StandingPrescription = () =>{
const [data, setData] = useState("");
useEffect( ()=>{
fetchData();

}, [])


const fetchData =async ()=>{
  const res = await fetch("http://localhost:4000/standingprescriptions/1", {
      method:"GET",
      headers: {
        'Content-Type': 'application/json'
      },
  });
  const data = await res.json();
  setData(data);
}

if(data.data){
 return(
    <div >
        <ul className={css.standingprescription}>
          {data.data.map((item)=>{
              return <li key={item.prescription_id}><span className={css.prescription}>{item.d_id}</span> <span className={css.prescription_date}>{item.date_created.substring(0, item.date_created.indexOf('T') != -1 ? item.date_created.indexOf('T'): item.date_created.length)}</span></li>
          })}
        </ul>
    </div>
)   
}
return <div className={css.standingprescription}>{data.message}</div>;

}

export default StandingPrescription;