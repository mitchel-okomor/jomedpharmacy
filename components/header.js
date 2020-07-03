import css from './header.module.scss';
import Link from 'next/link';
import { useContext } from 'react';
import CartContext from './cartcontext';

const Header = () => {
  const { cart, customer } = useContext(CartContext);
    return(
        <header className={css.header}>
            <div className={css.logo}>
              <h1>Jomed Pharmacy</h1> 
            <p>Your Health Needs at your reach</p>  
            </div>
<div className={css.search}>
<form >
  <input type="search" id="search" name="search" placeholder="Search Products & Services" />
  <button>search</button>
</form>

</div>

            <div className={css.activity}>
    <div className={css.user}> <img src="/user.png" /><Link href="/account">{(()=>{ if(customer.name){return customer.name}else return "Login/Signup"})()}</Link> </div>               
    <div className={css.cart}><Link href="/cart"><img src="/cart.png"/></Link><span> {cart.length}</span></div>
                </div>
            
        </header>
    )
}

export default Header;