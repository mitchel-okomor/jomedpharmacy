import React, { useState, useReducer } from "react";
import css from './signup.module.scss';
import axios from "axios";
import Loading from './loading';

const initialState = {
      fname: "",
  lname: "",
  email: "",
  number: "",
  address: "",
  password: "",
loading: false
};

//handle state changes with reducer
const reducer = (state, { field, value }) => {
return { ...state, [field]: value  };
};

const Signup = (props) => {
    //use reducer hook to dispatch change action
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  //submit form data to backend server
  const handleSubmit =async (e) => {
        e.preventDefault();
        dispatch({field:"loading", value:true});
        console.log(state.loading);
const url = 'http://localhost:4000/customer';
  console.log(state);
  try{
  const response = await axios.post(url, state);
  if(response.status==200){
   console.log(response);
dispatch({field:"loading", value:false}); 
  }
}
  catch(error){
    console.log(error);
  }
  
  };




  const { fname, lname, email, number, address, password, loading} = state;
  if(loading){
return <Loading />
    }
  return (
        <form className={css.signup}>
          <fieldset>
            <legend>Create Account:</legend>
            <label for="fname">First name:</label> <br />
            <input
              type="text"
              id="fname"
              name="fname"
              value={fname}
              placeholder="First Name"
              required
              onChange={handleChange}
            />
            <br />
            <label for="lname">Last name:</label> <br />
            <input
              type="text"
              id="lname"
              name="lname"
              value={lname}
              placeholder="Last Name"
              required
              onChange={handleChange}
            />
            <br />
            <label for="email">Email:</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="johndoe@gmail.com"
              required
              onChange={handleChange}
            />
            <br />
            <label for="number">phone number:</label> <br />
            <input
              type="number"
              id="number"
              name="number"
              value={number}
              placeholder="+2348090213567"
              required
              onChange={handleChange}
            />
            <br />
            <label for="address">address:</label> <br />
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              placeholder="4, johnson Street, balogun, Lagos"
              required
              onChange={handleChange}
            />
            <br />
            <label for="password">password:</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              required
              onChange={handleChange}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </fieldset>
        </form>
  );
};

export default Signup;
