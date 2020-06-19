import css from './account.module.scss';

const Account = (props)=>{

    return(
        <div className={css.account}>
<h1 className={css.heading}>Account</h1>

<div className={css.form}>
<form className={css.signup}>
 <fieldset>
  <legend>Create Account:</legend>
  <label for="fname">First name:</label> <br />
  < input type="text" id="fname" name="fname" placeholder="First Name" required/>
  <br />
  <label for="lname">Last name:</label> <br />
  <input type="text" id="lname" name="lname" placeholder="Last Name" required/>
  <br />
  <label for="email">Email:</label> <br />
  <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" required/>  
  <br />
  <label for="number">phone number:</label> <br/>
  <input type="number" id="number" name="number" placeholder="+2348090213567" required/>
  <br />
  <label for="number">phone number:</label> <br />
  <input type="number" id="number" name="number" placeholder="4, johnson Street, balogun, Lagos" required />
  <br />
  <label for="password">password:</label> <br />
  <input type="password" id="password" name="passweord" required/>  
  <br />
  <button>Submit</button>
 </fieldset>
</form>
<form className={css.login}>
 <fieldset>
  <legend>Login:</legend>
  <label for="email">Email:</label> <br />
  <input type="email" id="email" name="email" />  
  <br />
  <label for="password">password:</label> <br />
  <input type="password" id="password" name="passweord" />  
  <button>Submit</button>
 </fieldset>
</form>
</div>
</div>

    );
}

export default Account;