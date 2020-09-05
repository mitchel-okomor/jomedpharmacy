import React, { useState, useReducer } from "react";
import css from './editproduct.module.scss';
import axios from "axios";
import Loading from '../components/loading';
import {useEffect} from 'react';
import Link from "next/link";



const initialState = {
  customerId:"",
      name: "",
  price: "",
  category: "",
  description: "",
loading: false,
};

//handle state changes with reducer
const reducer = (state, { field, value }) => {
return { ...state, [field]: value  };
};

const prescription = (props) => {
    //use reducer hook to dispatch change action
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  console.log(state.customerId);

  //during component mounting
  useEffect(()=>{
    alert(context.query)
const customerId = localStorage.getItem("customerId");
dispatch({field:"customerId", value:customerId}); 

  },[])

  //submit form data to backend server
  const handleSubmit =async (e) => {
   e.preventDefault();
   
        dispatch({field:"loading", value:true});
const url = 'http://localhost:4000/product';
  console.log(state);  
  try{
  const response = await axios.patch(url, state, {
    timeout: 60000
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






  const { name, price, category, description, loading, chat, button} = state;
  if(loading){
    
return(
  <div className={css.editproduct}>
<Loading />
    </div>
) 
    }
  return (
    <div className={css.editproduct}>
    <div id={css.myForm}>
      <br />
        <form className={css.formcontainer}>
          <fieldset>
            <legend><b><h3 className={css.heading}>Edit Product</h3></b></legend>
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
            <label for="price">phone number:</label> <br />
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              placeholder="08090213567"
              required
              onChange={handleChange}
              
            />
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
            <label for="category">category:</label>
    <select id="category" name="category" onChange={handleChange}>
      <option value="antibiotics" selected>Antibiotics</option>
      <option value="antidiabetics">Antidiabetics</option>
      <option value="antimaleria">Antimaleria</option>
    </select>
            <br />
            <br />
            <button type="submit" className={css.btn}  onClick={handleSubmit}>Submit</button>
      
            <button  className={css.cancel} > <Link href="/admin">cancel</Link></button>
          </fieldset>
        </form>
        </div>
</div>
  );
};

export default prescription;
