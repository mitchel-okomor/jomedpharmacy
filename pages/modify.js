import React, { useState, useReducer } from "react";
import css from './signup.module.scss';
import axios from "axios";
import Loading from './loading';

const initialState = {
      fName: "",
  lName: "",
  email: "",
  number: "",
  address: "",
loading: false
};

//handle state changes with reducer
const reducer = (state, { field, value }) => {
return { ...state, [field]: value  };
};

const Modify = (props) => {
    //use reducer hook to dispatch change action
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  //submit form data to backend server
  const handleSubmit =async (e) => {
        e.preventDefault();
        dispatch({field:"loading", value:true});
const url = 'http://localhost:4000/customer';
  console.log(state);
  try{
  const response = await axios.post(url, state, {
    timeout: 30000
  });
  if(response.status==200){
   console.log(response);
   localStorage.setItem("customerId", response);
dispatch({field:"loading", value:false}); 
  }
}
  catch(error){
    console.log(error);
    dispatch({field:"loading", value:false}); 
  }
  
  };




  const { fName, lName, email, number, address, loading} = state;
  if(loading){
return <Loading />
    }
  return (
        <form className={css.edit}>
          <fieldset>
            <legend>Create Account:</legend>
            <label for="fname">First name:</label> <br />
            <input
              type="text"
              id="fname"
              name="fName"
              value={fName}
              placeholder="First Name"
              required
              onChange={handleChange}
            />
            <br />
            <label for="lname">Last name:</label> <br />
            <input
              type="text"
              id="lname"
              name="lName"
              value={lName}
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
            
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </fieldset>
        </form>
  );
};

export default Modify;
