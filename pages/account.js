import React, { useState, useEffect } from "react";
import css from "./account.module.scss";
import Login from "../components/login";
import Signup from "../components/signup";
import { useContext } from 'react';
import appContext from '../components/appcontext';
import Link from 'next/link';




const Account = (props) => {
  const {customer } = useContext(appContext);
  if(customer){
   return(
     <div className={css.profile}>
       <h2>User Profile</h2>
       <table>
         <th></th>
         <th></th>
         <tr>  <td>Name:</td> <td>{customer.name}</td></tr>
         <tr>  <td>Email:</td> <td>{customer.email}</td></tr>
         <tr>  <td>Phone Number:</td> <td>{customer.number}</td></tr>
         <tr>  <td>Delivery Address:</td> <td>{customer.address}</td></tr>
       </table>

<br />
<Link href="/modify"><a>Edit</a></Link>    <span>  <button><a>Logout</a></button>       
</span>
     </div>
   )
 }
  return (

    <div className={css.account}>
      <h1 className={css.heading}>Account</h1>
      <div className={css.form}>
      <Signup />  
      <Login />
      </div>
    </div>
  );
};

export default Account;
