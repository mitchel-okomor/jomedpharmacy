import css from  './footer.module.scss';
import Link from 'next/link';


const Footer = () =>{
    return(
        <footer>
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
                <Link href="">Returns & Exchanges</Link>
                <br />
                <Link href=""> Store survey</Link>
                <br />
                <Link href="">Contact Us | (+234) 80</Link>
            </div>

            <div>
              <h3>
                About Jomed Phamacy
                </h3>
                <Link href="">Company Information</Link>
                <br />
                <Link href="">Terms and Conditions</Link>
                <br />
                <Link href=""> Privacy policy</Link>
               
            </div>

            <div className={css.stayintouch}>
            <h3>
                Stay in Touch
                </h3>
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
             <div></div> 
              </div>

             </div>  
        </footer>
    )
}

export default Footer;