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
<Link href="">Brands A - Z</Link>
<br />
<Link href="">Shops location</Link>
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

            <div>
            <h3>
                Stay in Touch
                </h3>
                <Link href="">Company Information</Link>
                <br />
                <Link href="">Terms and Conditions</Link>
                <br />
                <Link href=""> Privacy policy</Link>
              </div>

             </div>  
        </footer>
    )
}

export default Footer;