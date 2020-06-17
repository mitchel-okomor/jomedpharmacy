import css from './navigation.module.scss';
import Link from 'next/link';

 const Navigation = () =>{
    return(
        <nav className={css.nav}>
            <div className="home-icon"><Link href="/">Home</Link></div>
        <ul >
            <li>
              
            </li>
            <li className={css.dropdown}>
            <Link href="/products" className={css.dropbtn}> Products  </Link>
            <div className={css.dropdown_content}>
      <a href="#">Antibiotics</a>
      <a href="#">Haematinics</a>
      <a href="#">Suppliments</a>
    </div>
                </li>
            <li className={css.dropdown}>
            <Link href="/services" className={css.dropbtn}> Services  </Link>
            <div className={css.dropdown_content}>
      <Link href="/bpc">Blood Pressure Check</Link>
      <Link href="/bgt">Blood Glucose Test</Link>
      <Link href="/wmc">Weigth Management Care</Link>
    </div>
                </li>
                <li>
                <Link href="locations"> Locations</Link> 
                </li>
                <li>
                <Link href="about">  About</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navigation;