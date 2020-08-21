import {useState, useEffect} from "react";


const StandingOrder = () =>{
const {data, setData} = useState([]);
useEffect(()=>{
    fetchData();
})


const fetchData = ()=>{
    
}

return(
    <div>
        <ul>
          {data.map((item)=>{
              return <li>{item.productId}</li>
          })}
        </ul>
    </div>
)
}