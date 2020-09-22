import css from './checkout.module.scss';
import {useEffect, useContext, useState} from 'react';
import appContext from "../components/appcontext";
import { useRouter } from 'next/router';
import axios from 'axios';



const Checkout = () =>{
    const {customer, cart, closeNav } = useContext(appContext);
    const [message, setMessage] = useState("");
    const router = useRouter()


    useEffect(()=>{
if(!customer){
    alert("please Login");
    router.push("/account");

}
    },[])

    const  handleSubmit = async (event) =>{
        try{
    event.preventDefault();
         const response = await axios.post("http://localhost:4000/order", {"cart":cart}, {
           timeout: 30000
         });
   console.log(response);
   setMessage(response.data.message);
        }catch(err){
   console.log(err);
   setMessage("Error occured please try again");
        }
        
   
   
       }
    if(message.length > 1){
    <div className={css.checkout}> {message}</div>
    }
    return(
        <div className={css.checkout} onClick={closeNav}>
      <h2>Web payment coming soon</h2>
      <button onClick={handleSubmit}>Submit order</button>
        </div>
     
    )
}


export default Checkout;