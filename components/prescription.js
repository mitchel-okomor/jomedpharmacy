import React, { useState, useReducer } from "react";
import css from './prescription.module.scss';
import axios from "axios";
import Loading from './loading';
import {useEffect, useContext} from 'react';
import appContext from './appcontext';



const initialState = {
  customerId:"",
      name: "",
  email: "",
  number: "",
  description: "",
loading: false,
chat: css.chatclosed,
button: css.openbutton
};

//handle state changes with reducer
const reducer = (state, { field, value }) => {
return { ...state, [field]: value  };
};

const prescription = (props) => {
  const {customer} = useContext(appContext);
    //use reducer hook to dispatch change action
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  console.log(state.customerId);

  //during component mounting
  useEffect(()=>{
const customerId = localStorage.getItem("customerId");
dispatch({field:"customerId", value:customerId}); 

  },[])

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
    console.log("toggling")
if (state.chat === css.chatclosed){
  dispatch({field:"chat", value:css.chatopen});
  dispatch({field:"button", value:css.closebutton}); 
}
else{
  dispatch({field:"chat", value:css.chatclosed}); 
  dispatch({field:"button", value:css.openbutton}); 

}
  }




  const { name, description, number, loading, chat, button} = state;
  if(loading){
    
return(
  <div className={css.prescription}>
<Loading />
    </div>
) 
    }
    else if(customer && Boolean(customer.is_admin)){
      return "";
    }
  return (
    <div className={css.prescription}>
    <button className={button} onClick={toggleChat}>prescription</button>
    <div className={chat} id={css.myForm}>
      <br />
        <form className={css.formcontainer}>
          <fieldset>
            <legend><b><h3 className={css.heading}>Send us your prescription</h3></b></legend>
            <br />
            <label for="fname">Full Name:</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={customer?customer.name: name}
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
              value={customer?customer.number:number}
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
              name="description"
              value={description}
              required
              onChange={handleChange}
            />
            <br />
            <button type="submit" className={css.submit_btn}  onClick={handleSubmit}>Submit</button>
            <br />
            <button  className={css.cancel} onClick={toggleChat}>close</button>
          </fieldset>
        </form>
        </div>
</div>
  );
};

export default prescription;
