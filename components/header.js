import css from './header.module.scss';
import Link from 'next/link';

const Header = () => {
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
              <div className={css.user}> <img src="/user.png" /><Link href="">Login/Signup</Link> </div>               
                <div className={css.cart}><img src="/cart.png"/><Link href="">Cart</Link>  </div>
                </div>
            
        </header>
    )
}

export default Header;