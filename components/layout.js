import Head from './head';
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';

const Layout = (props) =>{

return (
    <div>
      <Head />
    <Header />
    <Navigation />
    {props.children}  
    <Footer /> 
    </div>
)
}

export default  Layout;