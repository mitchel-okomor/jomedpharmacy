import css from './account.module.scss';

const Account = (props)=>{

    return(
        <div className={css.account}>
<h1 className={css.heading}>Account</h1>

<div>
<form className={css.signup}>
 <fieldset>
  <legend>Create Account:</legend>
  <label for="fname">First name:</label>
  < input type="text" id="fname" name="fname" />
  <br />
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" />
  <br />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />  
  <br />
  <label for="number">phone number:</label>
  <input type="number" id="number" name="number" />
  <br />
  <label for="number">phone number:</label>
  <input type="number" id="number" name="number" />
  <br />
  <input type="submit" value="Submit" />
 </fieldset>
</form>
<form className={css.login}>
 <fieldset>
  <legend>Create Account:</legend>
  <label for="fname">First name:</label>
  < input type="text" id="fname" name="fname" />
  <br />
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" />
  <br />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />  
  <br />
  <label for="number">phone number:</label>
  <input type="number" id="number" name="number" />
  <br />
  <label for="number">phone number:</label>
  <input type="number" id="number" name="number" />
  <br />
  <input type="submit" value="Submit" />
 </fieldset>
</form>
</div>
</div>

    );
}

export default Account;