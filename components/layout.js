import Head from './head';
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';
import Prescription from './prescription';

const Layout = (props) =>{

return (
    <div>
      <Head />
    <Header />
    <Navigation />
    {props.children}  
    <Prescription />
 
    <Footer /> 
    </div>
)
}

export default  Layout;