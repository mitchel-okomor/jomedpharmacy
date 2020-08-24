import css from './checkout.module.scss';
import {useEffect, useContext} from 'react';
import appContext from "../components/appcontext";
import { useRouter } from 'next/router'



const Checkout = () =>{
    const {customer, cart } = useContext(appContext);
    const router = useRouter()


    useEffect(()=>{
if(!customer){
    alert("please Login");
    router.push("/account");

}
    },[])

    
    return(
        <div className={css.checkout}>
        checkout page  
        </div>
     
    )
}


export default Checkout;