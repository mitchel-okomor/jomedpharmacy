import css from './profile.module.scss';
import { useContext} from 'react';
import appContext from './appcontext';


const profile =()=>{
    const {customer} = useContext(appContext);

    return(
        
<div className={css.profile}>
<h2>User Profile</h2>
<table>
  <th></th>
  <th></th>
  <tr>  <td>Name:</td> <td>{customer.name}</td></tr>
  <tr>  <td>Email:</td> <td>{customer.email}</td></tr>
  <tr>  <td>Phone Number:</td> <td>{customer.number}</td></tr>
  <tr>  <td>Delivery Address:</td> <td>{customer.address}</td></tr>
</table>

<br />
<div className={css.buttons}><button >Edit</button>    </div>

</div>
    )
}

export default profile;