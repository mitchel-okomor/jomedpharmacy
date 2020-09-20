import Head from './head';
import Header from './header/header';
import Navigation from './navigation';
import Footer from './footer/footer';
import Prescription from './prescription';
import {useState} from 'react';



const Layout = (props) =>{

//   const[icon, setIcon] = useState({class:"fa fa-bars", text:""});

// function closeNav(){
//   let elem = document.getElementsByClassName("togle_nav")[0];
//   elem.style.display = "none";

//   if(icon.class === "fa fa-bars" && elem.style.display ==="block")      {
//     setIcon({class:"", text:"X"});
//     } else{
//     setIcon({class:"fa fa-bars", text:""}
//     );
  
//     } 
// }


//   function togleNav() {
//   let elem = document.getElementsByClassName("togle_nav")[0];
//   console.log(elem);
//   elem.style.display === "block"?elem.style.display = "none":elem.style.display = "block";

// if(icon.class === "fa fa-bars")      {
//   setIcon({class:"", text:"X"});
//   } else{
//   setIcon({class:"fa fa-bars", text:""}
//   );

//   } 
// }

return (
    <div  >
      <Head />
    <Header />
    <Navigation  />
    {props.children}  
    <Prescription />
 
    <Footer /> 
    </div>
)
}

export default  Layout;