import React, { useState, useReducer } from "react";
import css from './login.module.scss';
import axios from "axios";

const initialState = {
  email: "",
  password: "",
};

//handle state changes with reducer
const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const Login = (props) => {
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
  const {email, password } = state;
  return (

      <div className={css.form}>
        <form className={css.login}>
          <fieldset>
            <legend>Login:</legend>
            <label for="email">Email:</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <br />
            <label for="password">password:</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </fieldset>
        </form>
      </div>
  );
};

export default Login;
