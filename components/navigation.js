import css from './navigation.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

 const Navigation = () =>{

 useEffect(()=>{
       let list, i;
     list = document.querySelectorAll("i.icon");
     console.log(list);
      for (i = 0; i < list.length; i++) {
        list[i].classList.add('fa');
        list[i].classList.add('fa-bar');
      }
     },[]);

  const router = useRouter();

    
     function togleNav() {
      let elem = document.getElementsByClassName("togle_nav")[0];
      elem.style.display === "block"?elem.style.display = "none":elem.style.display = "block";
      }

      function myFunction(x) {
        togleNav();
        x.target.classList.toggle(css.change);
      }
    return(
      <div className={css.nav_container}>
<div class={css.container} onClick={myFunction}>
  <div class={css.bar1}></div>
  <div class={css.bar2}></div>
  <div class={css.bar3}></div>
</div>
        <nav className={`${css.nav} togle_nav`} >
        <ul >
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