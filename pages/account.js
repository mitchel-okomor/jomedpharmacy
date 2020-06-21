import React, { useState, useReducer } from "react";
import css from "./account.module.scss";
import Login from "../components/login";
import Signup from "../components/signup";
import axios from "axios";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  number: "",
  address: "",
  password: "",
};

//handle state changes with reducer
const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const Account = (props) => {
    //use reducer hook to dispatch change action
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  //submit form data to backend server
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  const { fname, lname, email, number, address, password } = state;
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
