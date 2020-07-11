import css from './header.module.scss';
import Link from 'next/link';
import Search from './search';
import { useContext,} from 'react';
import appContext from './appcontext';


const Header = () => {
  const { cart, customer } = useContext(appContext);
 
  return(
        <header className={css.header}>
            <div className={css.logo}>
              <h1>Jomed Pharmacy</h1> 
            <p>Your Health Needs at your reach</p>  
            </div>
<Search />

            <div className={css.activity}>
    <div className={css.user}> <img src="/user.png" /><Link href="/account"><a>{customer ? customer.name:"Login/Signup"}</a>
      </Link> 
      </div>               
    <div className={css.cart}><Link href="/cart"><a><img src="/cart.png"/><span> {cart.length}</span></a></Link></div>
                </div>
            
        </header>
    )
}

export default Header;