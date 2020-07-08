import React, {useContext, useReducer } from "react";
import css from './login.module.scss';
import axios from "axios";
import Loading from './loading';
import CartContext from './cartcontext';


const initialState = {
  email: "",
  password: "",
  loading: false,
  message: ""
};



//handle state changes with reducer
const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const Login = (props) => {

  const {setCustomer } = useContext(CartContext);

    //use reducer hook to dispatch change action
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  //submit form data to backend server
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({field:"loading", value:true});
    const url = 'http://localhost:4000/logincustomer';
    try{
    const response = await axios.post(url, state, {
      timeout: 30000
    });
    if(response.status==200){
           console.log("passed: "+JSON.stringify(response.data.message));
           dispatch({field:"message", value:response.data.message}); 
     localStorage.setItem("customerId", response.data.customer.id);
     localStorage.setItem("token", response.data.info.token);
     setCustomer(response.data.customer);
     dispatch({field:"loading", value:false}); 
    }
    else{
      console.log("failed: "+response.data)
      dispatch({field:"message", value:response.data.message}); 
      dispatch({field:"loading", value:false}); 

    }
  }
    catch(error){
      console.log(error);
      dispatch({field:"message", value:"Email or Password Incorrect"}); 
      dispatch({field:"loading", value:false}); 
    }  
  };


  const {email, password, loading, message } = state;
  if(loading){
    return <Loading />
        }
  return (

      <div className={css.form}>
        <form className={css.login}>
          <fieldset>
            <legend>Login:</legend>
            <label for="email-address">Email:</label> <br />
            <input
              type="email"
              id="email-address"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <br />
            <label for="login-password">password:</label> <br />
            <input
              type="password"
              id="login-password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <br/>
  <div>{message}</div>
          </fieldset>
        </form>
      </div>
    
  );
};

export default Login;
