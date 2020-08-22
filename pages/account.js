import React, { useState, useEffect } from "react";
import css from "./account.module.scss";
import Login from "../components/login";
import Signup from "../components/signup";
import logout from "../components/helper/logout";
import Profile from "../components/profile";
import { useContext } from 'react';
import appContext from '../components/appcontext';
import Link from 'next/link';
import StandingOrder from "../components/standingorder";
import StandingPrescription from "../components/standingprescription";



const Account = (props) => {
  const {customer } = useContext(appContext);
  if(customer){
   return(
    <div className={css.container}>
    <div className={css.account}>
<div className={css.myaccount}>
<h2><b>My Account</b></h2>
<ul>
  <li><Link href="">Orders</Link> </li>
  <li><Link href="">Order history</Link></li>
  <li><Link href="">Prescriptions</Link> </li>
  <li><Link href="">Prescription history</Link> </li>
  <li><Link href="">Saved items</Link> </li>
  <li><Link href="">Address Book</Link> </li>
  <li><Link href="">Personal information</Link> </li>
</ul>
<button onClick={()=> logout()}>Logout</button>
</div>
<div className={css.overview}>
<h2><b>Account overview</b></h2>
<div className={css.overviewdiv}>
 <div className={css.orderoverview}>
<h2>Standing Orders</h2>
<StandingOrder />
 </div>
<div><h2>Order history</h2>
</div>
<div><h2>Standing Prescription</h2>
<StandingPrescription />
</div>
<div><h2>Prescription history</h2>
</div> 
</div>

</div>
    </div>
    </div>
   )
 }
  return (
<div className={css.container}>
  <h1 className={css.heading}>Account</h1>
  <div className={css.account}>
      <div className={css.form}>
      <Signup />  
      <Login />
      </div>
    </div> 
</div>
   
  );
};

export default Account;
