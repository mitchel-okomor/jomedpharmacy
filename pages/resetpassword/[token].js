import {useState} from 'react';
import axios from "axios";
import css from "./reset.module.scss";
import { useRouter } from 'next/router';

const ResetPassword = ({ valid, token }) => {
  
  const router = useRouter();
  
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState();


  const  handleSubmit = async (event) =>{
    event.preventDefault();

    if(password == confirmPassword){
      try{
  const response = await axios.post("http://localhost:4000/resetpassword/"+token, {"password":password}, {
      timeout: 30000
    });
    console.log(response);
    if(response.status===200){
          alert("Password changed successfully");
router.push("/account");
    }else{
      alert("Something went wrong, please try again");
     
    }
      }catch(err){
        console.log(err)
      }
    }else{
setMessage("Password did not match, please check again");
    }
  
  }


    return (
    <div className={css.reset}>
      <br />
      <br />
        <h2 style={style}>Forget password</h2>
        <br />
        {valid ? (
          <>
            <p style={style}>Enter your new password.</p>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="password"
                  placeholder="New password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <br />
                  <input
                  type="password"
                  id="confirm_password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
        <div className={css.message}>{message}</div>
              <button className={css.set_password_button} type="submit">Set new password</button>
            </form>
          </>
        ) : (
          <p className={message}>This link may have been expired</p>
        )}
     </div>
    );
  };

  const style = {
    "margin":"auto", 
    "text-align":"center"
  }
  
  ResetPassword.getInitialProps = async ctx => {
    const { token } = ctx.query;
    try{
   const res = await fetch(
      `http://localhost:4000/verifytoken/${token}`,
      { method: 'GET' }
    )
    console.log(res);
    if(res.status === 200){
          return { token, valid:true};
    }else{
      return{valid:false}
    }
    }catch(err){
console.log(err);
    }
 
  };
  
  export default ResetPassword;