import React, { useState, useReducer } from "react";
import css from './prescription.module.scss';
import axios from "axios";
import Loading from './loading';

const initialState = {
      name: "",
  email: "",
  number: "",
  description: "",
loading: false,
chat: css.chatclosed
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
const url = 'http://localhost:4000/prescription';
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

  const toggleChat = ()=>{
    console.log("Inside Toggle Chat: "+state.chat)
if (state.chat === css.chatclosed){
  dispatch({field:"chat", value:css.chatopen}); 
}
else{
  dispatch({field:"chat", value:css.chatlosed}); 

}
  }




  const { name, email, number, loading, chat} = state;
  if(loading){
return <Loading />
    }
  return (
    <div className={css.prescription}>
    <button className={css.openbutton} onclick={toggleChat}>Chat</button>
    <div className={chat} id={css.myForm}>
        <form >
          <fieldset>
            <legend>Sensd us your prescription:</legend>
            <label for="fname">Full Name:</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="First Name"
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
            <label for="password">password:</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={handleChange}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </fieldset>
        </form>
        </div>
</div>
  );
};

export default Signup;
