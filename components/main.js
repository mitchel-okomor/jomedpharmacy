import css from "./main.module.scss";
import Link from "next/link";
import {useContext, useState, useEffect} from 'react';
import appContext from './appcontext';

const Main = (props) => {

  const {closeNav } = useContext(appContext);



  return (
    <main className={css.main} onClick={closeNav} >
      <div className={css.intro}>
      <div id="carouselExampleIndicators" class="carousel pt-0 slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner bg-transparent">
    <div class="carousel-item pt-0 bg-transparent active  ">
      <img class="d-block  rounded" src="/slide1.jpg" alt="First slide" />
    </div>
    <div class="carousel-item pt-0 bg-transparent">
      <img class="d-block  rounded" src="/slide2.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item pt-0 bg-transparent">
      <img class="d-block  rounded" src="/slide3.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
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
