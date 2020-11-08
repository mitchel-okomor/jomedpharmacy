import css from "./main.module.scss";
import Link from "next/link";
import {useContext, useState, useEffect} from 'react';
import appContext from './appcontext';

const Main = (props) => {

  const {closeNav } = useContext(appContext);



  return (
    <main className={css.main} onClick={closeNav} >
      <div className={css.intro}>
        <div className="container-fluid bg-transparent">
               <div className="row bg-transparent text-left">
<div className="col-sm-12 col-md-6 col-lg-6 bg-transparent">
<div className="m-5 p-5 bg-transparent">
 <h1>Jomed Pharmacy</h1>
<p>- Your Family Number 1 Pharmacy</p>
<p>Phasellus varius diam arcu, vel laoreet lorem molestie faucibus. Morbi vestibulum tempus quam vitae.</p>
<button>View More &gt;</button> 
</div>

</div>
      </div>
        </div>
 
       
      </div> 
      <div className={css.cards}>
          
         <div>
        <h3>Welcome to</h3> 
        
<h1>Jomed Pharmacy</h1> 
<b>Your goto health care provider</b> <br /> <br />
<p>You and your loved ones’ health come first. With high-quality medications and supplies provided by skilled and experienced pharmacists, you can guarantee to live a healthy life within your budget. We look out for everyone in the community as if they are part of our family too.</p>
 <br /> 
 <Link href="/services"><a className={css.pagelink}>Find care...</a></Link>         
</div> 
             <div>
             <h2>Get Your Refill</h2> 
<img src="/refill.png" />
<p>Do you need a refill? 
  <br />
  We got you covered. All you have to do is reach out to us.
  </p>
  <br />
  <br />
  <Link href="/services"><a className={css.pagelink}>prescription...</a></Link>         

                 </div>
                 <div>
                 <h2>Get Your Re</h2> 
                 <img src="/refill.png" />
                 <br />
                    <p>  We got you covered. All you have to do is reach out to us.
                    We got you covered. All you have to do is reach out to us.

</p>
<br />
  <br />
                    <Link href="/services"><a className={css.pagelink}>Find out More...</a></Link>         
                 </div>
         </div>
         <div className={css.third}>
<div>
 <h2>What makes our services the best?</h2>
 <p>We lend you a hand in choosing the the better and best options for your health needs. we also make ourselves well recognised throug our:</p>
 <ul>
   <li>Friendly and courteous staffs</li>
   <li>Prompt and efficient customer service</li>
   <li>Experienced and knowlegdeable pharmacist</li>
 </ul>
</div>
<div>
  second
</div>

         </div>
    </main>
  );
};

export default Main;
