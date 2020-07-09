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
chat: css.chatclosed,
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
if (state.chat === css.chatclosed){
  dispatch({field:"chat", value:css.chatopen}); 
}
else{
  dispatch({field:"chat", value:css.chatclosed}); 
}
  }




  const { name, email, number, loading, chat} = state;
  if(loading){
return <Loading />
    }
  return (
    <div className={css.prescription}>
    <button className={css.openbutton} onClick={toggleChat}>prescription</button>
    <div className={chat} id={css.myForm}>
      <br />
        <form className={css.formcontainer}>
          <fieldset>
            <legend><b>Send us your prescription</b></legend>
            <br />
            <label for="fname">Full Name:</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="John Okafor"
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
              placeholder="08090213567"
              required
              onChange={handleChange}
              
            />
            <br />
            <br />
            <label for="prescription">prescription details:</label> <br />
            <textarea
              type="text"
              id="prescription"
              name="prescription"
              required
              onChange={handleChange}
            />
            <br />
            <button type="submit" className={css.btn}  onClick={handleSubmit}>Submit</button>
            <br />
            <button  className={css.cancel} onClick={toggleChat}>close</button>
          </fieldset>
        </form>
        </div>
</div>
  );
};

export default Signup;
