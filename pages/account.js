import React, { useState, useEffect } from "react";
import css from "./account.module.scss";
import Login from "../components/login";
import Signup from "../components/signup";
import { useContext } from 'react';
import CartContext from '../components/cartcontext';




const Account = (props) => {
  const {customer } = useContext(CartContext);
  if(customer){
   return(
     <div className={css.account}>
       <h2>User Profile</h2>
       <table>
         <tr>  <td>Name:</td> <td>{customer.name}</td></tr>
         <tr>  <td>Email:</td> <td>{customer.email}</td></tr>
         <tr>  <td>Phone Number:</td> <td>{customer.number}</td></tr>
         <tr>  <td>Billing Address:</td> <td>{customer.address}</td></tr>
       </table>

       <button>Edit</button>
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
