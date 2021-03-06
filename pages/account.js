import React, { useState, useEffect } from "react";
import css from "./account.module.scss";
import Login from "../components/login";
import Signup from "../components/signup";
import logout from "../components/helper/logout";
import { useContext } from 'react';
import appContext from '../components/appcontext';
import Link from 'next/link';
import StandingOrder from "../components/standingorder";
import StandingPrescription from "../components/standingprescription";
import PrescriptionHistory from "../components/prescriptionhistory";
import OrderHistory from "../components/orderhistory";
import { useRouter } from 'next/router'




const Account = (props) => {
  const {customer, closeNav } = useContext(appContext);
  const router = useRouter()

  //check if user is not admin
  if(customer && !(Boolean(customer.is_admin))){
   return(
    <div className={css.container} onClick={closeNav}>
    <div className={css.account}>
<div className={css.myaccount}>
  
<h2><b>My Account</b></h2>
<ul>
  <li><Link href="">Orders</Link> </li>
  <li><Link href="/orderhistory">Order history</Link></li>
  <li><Link href="">Prescriptions</Link> </li>
  <li><Link href="/prescriptionhistory">Prescription history</Link> </li>
  <li><Link href="/address">Address Book</Link> </li>
  <li><Link href="/profile">Personal information</Link> </li>
</ul>
<br />

<div className={css.logout_link}><Link  href="" onClick={()=> logout()}><a >Logout</a></Link>
</div>
</div>
<div className={css.overview}>
<h2><b>Account overview</b></h2>
<div className={css.overviewdiv}>
 <div className={css.orderoverview}>
<h2>Standing Orders</h2>
<StandingOrder />
 </div>
<div><h2>Order history</h2>
<OrderHistory />
</div>
<div><h2>Standing Prescription</h2>
<StandingPrescription />
</div>
<div><h2>Prescription history</h2>
<PrescriptionHistory />
</div> 
</div>

</div>
    </div>
    </div>
   )
 }
 //check if user is admin
 else if(customer && Boolean(customer.is_admin)){
 router.push("/admin");
 }
  return (
<div className={css.container} onClick={closeNav}>
  <br />
  <br />
  <h1 className={css.heading}>Account</h1>
  <div className={css.account}>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">    
        <div className="m-3"><Signup />  </div>   
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6"> 
          <div className="m-3"> <Login /></div>
         
          </div>
      
      </div>
    </div> 
</div>
   
  );
};

export default Account;
