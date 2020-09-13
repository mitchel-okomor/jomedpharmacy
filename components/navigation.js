import css from './navigation.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

 const Navigation = () =>{


  const router = useRouter();
const[iconText, setIconText] = useState("");
const[iconClass, setIconClass] = useState("fa fa-bars");

    
     function togleNav() {
      let elem = document.getElementsByClassName("togle_nav")[0];
      elem.style.display === "block"?elem.style.display = "none":elem.style.display = "block";

if(iconClass === "fa fa-bars")      {
  setIconClass("");
  setIconText("X");
} else{
  setIconClass("fa fa-bars");
  setIconText("");
}   

}

   
    return(
      <div className={css.nav_container}>
        <nav className={css.nav}>
    <button className={css.icon_button} onClick={togleNav}><i class={iconClass} aria-hidden="true"></i>{iconText}</button>
     
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