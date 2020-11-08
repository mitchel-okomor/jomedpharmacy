import css from './locations.module.scss';
import Map from '../components/map';
import {useContext, useState, useEffect} from 'react';
import appContext from '../components/appcontext';


 


const Locations = (props)=>{
 const {closeNav } = useContext(appContext);
    return(
        <div className={css.locations} onClick={closeNav}>

<div>
    <h1>Head Office</h1>
    <p><i class="fa fa-map-marker" aria-hidden="true"></i>
 Find us at: 41 Dorcas Moradayo St, Oko-Oba, Agege, Lagos.
</p>
</div>

<div>
   
<iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0713541880527!2d3.3111736143359476!3d6.638061195200029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9150411f1d91%3A0x10fd4ed8876e05ec!2sJo-med%20Pharmacy%20Ltd!5e0!3m2!1sen!2sng!4v1604825583974!5m2!1sen!2sng"
              style={{
                border: "0",
                width: "100%",
                height: "370px",
                frameborder: "0",
              }}
              allowFullScreen
            ></iframe>
</div>

        </div>
    )
}

export default Locations;