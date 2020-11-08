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
<div className=" bg-transparent ">
 <h1 >Jomed Pharmacy</h1>
<p>- Your Family Number 1 Pharmacy</p>
<p>Phasellus varius diam arcu, vel laoreet lorem molestie faucibus. Morbi vestibulum tempus quam vitae.</p>
<button>View More &gt;</button> 
</div>

</div>
      </div>
        </div>

      </div> 
      <div className={css.middle_cards}>
      <div className="row mt-5 h-100">
        <div className="col-sm-12 col-lg-4 col-md-4 h-100" >
  <div className="bg-primary p-5 h-100 text-white "><div>
 <h1 className="font-weight-bolder mt-3 mb-ms-5"><i class="fa fa-envelope mr-3" aria-hidden="true"></i>NEWS LETTER</h1> 
</div>
<div>
  <input placeholder="EMAIL" /> <button>SUBMIT</button>
</div></div>

        </div>
        <div className="col-sm-12 col-lg-4 col-md-4 h-100">
          <div className="p-5 mt-3 h-100">
            <h1 className="font-weight-bolder">WHY BUY FROM US</h1>
<ul>
  <li className="pb-4"> We are a registered health service providers</li>
  <li className="pb-4">Our team is always ready to serve you</li>
  <li className="pb-4">We licenced by the ACPN</li>
</ul>
          </div>

</div>
<div className="col-sm-12 col-lg-4 col-md-4 h-100">
<div className="bg-primary p-5 h-100 text-white">
  <h1 className="font-weight-bolder mt-3"><i class="fa fa-medkit mr-3" aria-hidden="true"></i>
WHO WE ARE </h1>
  <ul>
    <li className="pb-4">Prompt and efficient customer service</li>
    <li className="pb-4">Free Prescription</li>
    <li className="pb-4">Fully Regulated Services</li>
  </ul>
</div>
</div>
      </div>

          </div>
          
         <div className={css.third}>
        <div className="row mt-5">
<div className="col-sm-12 col-md-8 col-lg-8">
<div className="text-center bg-white m-5 .about">
 <h1 className="font-weight-bold">ABout Jomed Health Services</h1>
 <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
   in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   </p>
   <button className="mt-4 btn-primary" >Read More</button>
</div>
</div>
<div className="col-sm-12 col-md-4 col-lg-4 mt-5">
<div className="row text-white ">
  <div className="col-sm-12 col-md-6 col-lg-6 ">
  <Link href=""><a className="text-white">
  <div className="m-2 p-3 bg-primary ">  <i class="fa fa-plus-square mr-2" aria-hidden="true"></i>
 Ulcer Treatment </div>
</a></Link>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 ">
  <Link href=""><a className="text-white">
  <div className="m-2 p-3 bg-primary ">
  <i class="fa fa-plus-square mr-2" aria-hidden="true"></i>Diabetes
  </div> </a></Link>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 ">
  <Link href=""><a className="text-white">
  <div className="m-2 p-3 bg-primary ">
  <i class="fa fa-plus-square mr-2" aria-hidden="true"></i> Nutrition
  </div></a></Link>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 ">
  <Link href=""><a className="text-white">
  <div className="m-2 p-3 bg-primary ">
  <i class="fa fa-plus-square mr-2" aria-hidden="true"></i> Skin Treatment
  </div> 
  </a></Link>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 ">
  <Link href=""><a className="text-white">
  <div className="m-2 p-3 bg-primary ">  <i class="fa fa-plus-square mr-2" aria-hidden="true"></i>
 Ulcer Treatment </div>
</a></Link>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 ">
  <Link href=""><a className="text-white">
  <div className="m-2 p-3 bg-primary ">
  <i class="fa fa-plus-square mr-2" aria-hidden="true"></i>Diabetes
  </div> 
  </a></Link>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 ">
  <Link href=""><a className="text-white">
  <div className="m-2 p-3 bg-primary ">
  <i class="fa fa-plus-square mr-2" aria-hidden="true"></i> Nutrition
  </div>
  </a></Link>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 ">
  <Link href=""><a className="text-white">
  <div className="m-2 p-3 bg-primary ">
  <i class="fa fa-plus-square mr-2" aria-hidden="true"></i> Skin Treatment
  </div> 
  </a></Link>
  </div>
</div>
</div>
        </div>
         </div>
       
    </main>
  );
};

export default Main;
