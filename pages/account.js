import React, { useState, useEffect } from "react";
import css from "./account.module.scss";
import Login from "../components/login";
import Signup from "../components/signup";
import axios from "axios";




const Account = (props) => {
const [user, setUser] = useState([{}]);

 

  const fetchUser = async()=>{
 const res = await axios.get("http://localhost:4000/user/16");
if(res.status == 200){
  return res.data;
}
  }

  const { name, email, number, address } = user;
 if(user.name){
   return(
     <div>
       <h2>User Profile</h2>
       <table>
         <tr>  <td>name</td> <td>{name}</td></tr>
         <tr>  <td>name</td> <td>{email}</td></tr>
         <tr>  <td>name</td> <td>{number}</td></tr>
         <tr>  <td>name</td> <td>{address}</td></tr>
       </table>
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
