import Head from './head';
import Header from './header/header';
import Navigation from './navigation';
import Footer from './footer/footer';
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