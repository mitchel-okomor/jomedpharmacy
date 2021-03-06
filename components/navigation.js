import css from './navigation.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useContext, useState, useEffect} from 'react';
import appContext from './appcontext';
import logout from './helper/logout';


 


 const Navigation = (props) =>{

  const { cart, customer, icon, togleNav } = useContext(appContext);

  const router = useRouter();
// const[iconText, setIconText] = useState("");
// const[iconClass, setIconClass] = useState("fa fa-bars");

    
//      function togleNav() {
//       // let elem = document.getElementsByClassName("togle_nav")[0];
//       // if(elem){
//       //         elem.style.display === "block"?elem.style.display = "none":elem.style.display = "block";

//       // }
//   // if(iconClass === "fa fa-bars")      {
//   // setIconClass("");
//   // setIconText("X");
//   // } else{
//   // setIconClass("fa fa-bars");
//   // setIconText("");
//   // } 
// }

   
    return(
      <div className={css.nav_container} >
        <nav className={css.nav}>
      <div className={css.mobile}>
      
      <Link href="/account"><i class="fa fa-user-circle-o pt-3" aria-hidden="true"></i>
</Link> 
    <Link href="/account"><a>{customer ? customer.name:""}</a>
      </Link> 
      {
        //check if user is admin
        !customer || !(Boolean(Number(customer.is_admin)))?
        <div className={css.mobile_cart} id="mobile_cart">
        <Link href="/cart"><i class="fa fa-cart-arrow-down pt-2" aria-hidden="true"></i>
</Link><span className="pt-2">{cart.length}</span>
        </div>:<div className={css.mobile_cart} > <Link href="/account"><a className={css.admin_link}>Admin Panel</a></Link> </div>

      }  
    <button className={css.icon_button} onClick={togleNav}><i class={icon.class} aria-hidden="true"></i>{icon.text}</button>
     </div>
        <ul className="togle_nav">
            <li className={router.pathname == "/"? css.active:""}>
            <Link href="/" >Home</Link>
            </li>
            <li className={css.dropdown} className={router.pathname == "/products"? css.active:""}>
            <Link href="/products" className={css.dropbtn}> Products  </Link>
            <div className={css.dropdown_content}>
      <a href="#">Antibiotics</a>
      <a href="#">Haematinics</a>
      <a href="#">Suppliments</a>
    </div>
                </li>
            <li className={css.dropdown}  className={router.pathname == "/services"? css.active:""}>
            <Link href="/services" className={css.dropbtn}> Services  </Link>
            <div className={css.dropdown_content}>
      <Link href="/bpc">Blood Pressure Check</Link>
      <Link href="/bgt">Blood Glucose Test</Link>
      <Link href="/wmc">Weigth Management Care</Link>
    </div>
                </li>
                <li className={router.pathname == "/locations"? css.active:""}>
                <Link href="/locations"> Locations</Link> 
                </li>
                <li className={router.pathname == "/about"? css.active:""}>
                <Link href="/about">  About</Link>
                </li>
            </ul>

        </nav>
        </div>
    )
}

export default Navigation;