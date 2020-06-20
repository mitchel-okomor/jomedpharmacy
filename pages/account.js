import React, { useState, useReducer } from 'react';
import css from './account.module.scss';
import axios from 'axios';

 const initialState = {
     fname:'',
     lname:'',
email:'',
number:'',
address:'',
password:''
 }

 const reducer = (state, {field,value})=>{
return({...state,
[field]:value
}
)
 };

const Account = (props)=>{

 const [state, dispatch] = useReducer(reducer, initialState)
    const handleChange = (e)=>{ 
dispatch({field:e.target.name, value:e.target.value
});
}

 const handleSubmit = (e)=>{
    e.preventDefault();
console.log(state);
}
    const { fname,lname,email,number,address,password} = state;
return(
        <div className={css.account}>
<h1 className={css.heading}>Account</h1>

<div className={css.form}>
<form className={css.signup}>
 <fieldset>
  <legend>Create Account:</legend>
  <label for="fname">First name:</label> <br />
  < input type="text" id="fname" name="fname" value={fname} placeholder="First Name" required  onChange={handleChange}/>
  <br />
  <label for="lname">Last name:</label> <br />
  <input type="text" id="lname" name="lname" value={lname} placeholder="Last Name" required onChange={handleChange}/>
  <br />
  <label for="email">Email:</label> <br />
  <input type="email" id="email" name="email" value={email} placeholder="johndoe@gmail.com" required onChange={handleChange}/>  
  <br />
  <label for="number">phone number:</label> <br/>
  <input type="number" id="number" name="number" value={number} placeholder="+2348090213567" required onChange={handleChange}/>
  <br />
  <label for="address">address:</label> <br />
  <input type="text" id="address" name="address" value={address} placeholder="4, johnson Street, balogun, Lagos" required onChange={handleChange}/>
  <br />
  <label for="password">password:</label> <br />
  <input type="password" id="password" name="password" value={password} required onChange={handleChange}/>  
  <br />
  <button onClick={handleSubmit}>Submit</button>
 </fieldset>
</form>
<form className={css.login}>
 <fieldset>
  <legend>Login:</legend>
  <label for="email">Email:</label> <br />
  <input type="email" id="email" name="email" value={email} onChange={handleChange}/>  
  <br />
  <label for="password">password:</label> <br />
  <input type="password" id="password" name="password" value={password} onChange={handleChange}/>  
  <button onClick={handleSubmit}>Submit</button>
 </fieldset>
</form>
</div>
</div>

    );
}

export default Account;