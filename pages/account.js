import React, { useState, useEffect } from "react";
import css from "./account.module.scss";
import Login from "../components/login";
import Signup from "../components/signup";
import fetch from 'isomorphic-unfetch';




const Account = (props) => {
const [user, setUser] = useState('');

 
  


  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:4000/customer/16');
      const data = await res.json();
     const user = data.data;
      console.log(data.data);
     setUser(user);
    }
    fetchData();
  }, []);

  const { name, email, number, address } = user;
 console.log(user);
  if(name !== undefined){
   return(
     <div className={css.account}>
       <h2>User Profile</h2>
       <table>
         <tr>  <td>Name:</td> <td>{name}</td></tr>
         <tr>  <td>Email:</td> <td>{email}</td></tr>
         <tr>  <td>Phone Number:</td> <td>{number}</td></tr>
         <tr>  <td>Billing Address:</td> <td>{address}</td></tr>
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
