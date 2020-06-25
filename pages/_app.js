import App from 'next/app';
import './styles.scss'
import Layout from '../components/layout';
import cartcontext from '../components/cartcontext';


// This default export is required in a new `pages/_app.js` file.
class MyApp extends App{
  state = {
    cart : [],
    carttotal : 0
}

componentDidMount = () => {
  //get cart items from local storage
  const cart = JSON.parse(localStorage.getItem('cart'));
  //get cart total
  const carttotal = JSON.parse(localStorage.getItem('total'));
  if (cart) {
    this.setState({
       cart,
       carttotal
    });
  }
};

//add a product to cart
addToCart = (product) => {
  this.setState({
      cart: [...this.state.cart, product]
  });
  //save to local storage
  localStorage.setItem('cart', JSON.stringify(this.state.cart));
}

calculateTotal = (price) => {
  this.setState({
    carttotal: this.state.carttotal + price
  });
  localStorage.setItem('total', JSON.stringify(this.state.carttotal));
}


    render(){ const { Component, pageProps } = this.props

      return(
 <cartcontext.Provider value={{cart: this.state.cart, addToCart: this.addToCart, total: this.calculateTotal, carttotal: this.state.carttotal}}>
<Layout>
   <Component {...pageProps} /> 
</Layout>
</cartcontext.Provider>
  )  
    }
   
}


export default MyApp;