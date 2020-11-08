import {useContext, useReducer } from "react";
import css from './login.module.scss';
import axios from "axios";
import Loading from '../components/loading';
import appContext from '../components/appcontext';
import Link from 'next/link';

const initialState = {
  email: "",
  password: "",
  loading: false,
  message: "",
  buttonLoading: <i class="fa fa-spinner fa-spin"></i>,
};



//handle state changes with reducer
const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const Login = () => {

  const {setCustomer } = useContext(appContext);

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
     localStorage.setItem("customerId", response.data.customer.customer_id);
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


  const {email, password, loading, message, buttonLoading } = state;

  return (

    <div className={css.login}>
<form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Login:</legend>
            <label for="email">Email:</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <br />
            <label for="password">Password:</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            /> <br />
            <button type="submit" >{loading? buttonLoading : "Submit"}</button>
            <br/>           
  <div className={css.message}>{message}</div>

  <div className={css.password}><Link href="/resetpassword"><a>Forgot Password</a></Link> </div>
          </fieldset>
        </form>
    </div>

        
      
    
  );
};

export default Login;
