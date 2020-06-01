import css from './navigation.module.scss';
import Link from 'next/link';

 const Navigation = () =>{
    return(
        <nav className={css.nav}>
            <div className="home-icon"><Link href="/">Home</Link></div>
        <ul >
            <li>
              
            </li>
            <li><Link href="/products"> Products</Link></li>
            <li className={css.dropdown}>
            <Link href="/services" className={css.dropbtn}> Services  </Link>
            <div className={css.dropdown_content}>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
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