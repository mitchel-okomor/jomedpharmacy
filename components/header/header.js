import css from './header.module.scss';
import Link from 'next/link';
import Search from './../search';
import { useContext, useState} from 'react';
import appContext from './../appcontext';
import logout from './../helper/logout';


const Header = () => {
  const { cart, customer } = useContext(appContext);
 
  let [ userDropdown, ToggleUserDropdown] = useState(css.hide);


  return(
        <header className={css.header}>
            <div className={css.logo}>
              <h1>Jomed Pharmacy</h1> 
            <p>Your Health Needs at your reach</p>  
            </div>
<Search />

            <div className={css.activity}>
    <div className={css.user} onMouseEnter={()=>ToggleUserDropdown(userDropdown = css.show? css.hide : css.show)}> 
    <img src="/user.png" /><Link href="/account"><a>{customer ? customer.name:"Login/Signup"}</a>
      </Link> 

      {
        
           customer?<div class={css.dropdown_content}>
  <ul>
    <li><Link href="/account">My account</Link> </li>
    <li><Link href="">Personal information</Link> </li>
    <li><Link href="/orderhistory">Order history</Link> </li>
    <li onClick={()=>logout()}><Link href="">Log Out</Link> </li>
  </ul>
  </div>: ""
        
      }
    
      </div>               
    <div className={css.cart}>
      <Link href="/cart"><a><img src="/cart.png"/> </a></Link>{cart.length}</div>
                </div> 
            
        </header>
    )
}

export default Header;