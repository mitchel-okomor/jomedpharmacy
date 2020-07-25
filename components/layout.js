import Head from './head';
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';
import Prescription from './prescription';
import chat from './helper/chat';

const Layout = (props) =>{

return (
    <div>
      <Head />
    <Header />
    <Navigation />
    {props.children}  
    <Prescription />
  {()=>{if (typeof window !== 'undefined') {
  // it's safe to use window now
  return chat();
}}
   }  
    <Footer /> 
    </div>
)
}

export default  Layout;