import css from  './footer.module.scss';
import Link from 'next/link';
import {useContext, useState, useEffect} from 'react';
import appContext from './../appcontext';





const Footer = () =>{
    const {closeNav } = useContext(appContext);

    return(
        <footer onClick={closeNav}>
          <div className={css.footer}>
            <div>
             <h3>
  Shopping With Us
</h3>
<Link href="/products">Brands A - Z</Link>
<br />
<Link href="/locations">Shops location</Link>
<br />
            </div>

            <div>
              <h3>
                Customer Services
                </h3>
                <Link href="">Help & FAQs</Link>
                <br />
                <Link href=""> Store survey</Link>
                <br />
                <Link href=""> Tel: (+234) 703 545 2461</Link>
                <br/>
                <Link href="">Email: info@jomedpharmacy.com.ng</Link>

            </div>

            <div className={css.stayintouch}>
            <h3>
                Stay in Touch
                </h3>
                <Link href=""><a>
                <i className="fa fa-twitter-square" aria-hidden="true"></i></a></Link>
                <Link href=""><a>
                <i className="fa fa-facebook-square" aria-hidden="true"></i></a></Link>
                <Link href=""><a>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i></a></Link>
                <Link href=""><a>
                <i className="fa fa-whatsapp" aria-hidden="true"></i></a></Link>
                <Link href=""><a>
                <i className="fa fa-instagram" aria-hidden="true"></i></a></Link>
             <div></div> 
              </div>

             </div>  
        </footer>
    )
}

export default Footer;