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

          {/**Mobile Begin */}
            <div className={css.mobile}>
               
  
                </div> 

        {/**Mobile end */}

            <div className={css.logo}>
          <a href="/"><img src="/jomed11.png" /> </a>     
            </div>
<Search />

            <div className={css.activity}>
    <div className={css.user} onMouseEnter={()=>ToggleUserDropdown(userDropdown = css.show? css.hide : css.show)}> 
    <img src="/user.png" /><Link href="/account"><a>{customer ? customer.name:"Login/Signup"}</a>
      </Link> 

      {
        
           customer&&!(Boolean(Number(customer.is_admin)))?<div class={css.dropdown_content}>
  <ul>
    <li><Link href="/account">My account</Link> </li>
    <li><Link href="">Personal information</Link> </li>
    <li><Link href="/orderhistory">Order history</Link> </li>
    <li onClick={()=>logout()}><Link href="">Log Out</Link> </li>
  </ul>
  </div>:customer&&(Boolean(Number(customer.is_admin)))? <div class={css.dropdown_content}> <ul> <li onClick={()=>logout()}><Link href="">Log Out</Link> </li></ul></div>:""
        
      }
    
      </div>
      {
        //check if user is admin
        !customer || !(Boolean(Number(customer.is_admin)))?
        <div className={css.cart}>
        <Link href="/cart"><a><img src="/cart.png"/> </a></Link>{cart.length}
        </div>: <Link href="/account"><a className={css.admin_link}>Admin Panel</a></Link> 

      }               
  
                </div> 
            
        </header>
    )
}

export default Header;