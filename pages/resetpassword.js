import {useState} from 'react';
import css from './resetpassword.module.scss';
import axios from "axios";

const ResetPassword = props => {
   
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

   const  handleSubmit = async (event) =>{
     try{
 event.preventDefault();
      const response = await axios.post("http://localhost:4000/confirmation", {"email":email}, {
        timeout: 30000
      });
console.log(response);
setMessage(response.data.message);
     }catch(err){
       setMessage("Error occured please try again");
console.log(err);
     }
     


    }
  
    return (
    <div className={css.resetpassword}>
        <h2>Forget password</h2>
        <form onSubmit={handleSubmit}>
          <p>Please enter your email address below.</p>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
          <br />
        <br />
    <div>{message}</div>
        </form>
    
        </div>
    );
};

export default ResetPassword;