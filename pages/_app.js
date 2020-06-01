import App from 'next/app';
import './styles.scss'
import Layout from '../components/layout';

// This default export is required in a new `pages/_app.js` file.
class MyApp extends App{
    constructor(props){
        super(props)
    }

    render(){ const { Component, pageProps } = this.props

      return(
<Layout>
   <Component {...pageProps} /> 
</Layout>
  )  
    }
   
}


export default MyApp;