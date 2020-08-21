import css from './navigation.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';

 const Navigation = () =>{
     const router = useRouter();
    return(
        <nav className={css.nav}>
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
    )
}

export default Navigation;