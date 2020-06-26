import App from 'next/app';
import './styles.scss'
import Layout from '../components/layout';
import cartcontext from '../components/cartcontext';


// This default export is required in a new `pages/_app.js` file.
class MyApp extends App{
  state = {
    customer:'',
    cart : [],
    carttotal : 0
}

componentDidMount = () => {
  //get cart items from local storage
  const cart = JSON.parse(localStorage.getItem('cart'));
  //get cart total
  const carttotal = JSON.parse(localStorage.getItem('total'));
const user = async()=> {
  const res = await fetch('http://localhost:4000/customer/16');
  const data = await res.json();
 const user = data.data;
return user;
}

  if (cart) {
    this.setState({
      customer:user,
       cart:cart,
       carttotal:carttotal
    });
  }
};

//add a product to cart
addToCart = async (product) => {
 await this.setState({
      cart: [...this.state.cart, product]
  });
  //save to local storage
  localStorage.setItem('cart', JSON.stringify(this.state.cart));
}

calculateTotal = async (price) => {
  await this.setState({
    carttotal: this.state.carttotal + price
  });
  localStorage.setItem('total', JSON.stringify(this.state.carttotal));
}

removeFromTotal = async (price) => {
  if(this.state.carttotal >= 1){
  await  this.setState({
    carttotal: this.state.carttotal - price
  });
  localStorage.setItem('total', JSON.stringify(this.state.carttotal));
  }
  
}

removeFromCart = async (id)=>{
  console.log("product: "+id);
  let cart = this.state.cart
  let newCart = [];
  for(let i=0; i<=cart.length; i++){
if(cart[i].id == id){
  continue;
}
console.log(cart[i]);
newCart.push(cart[i]);
  }
 await this.setState({
    cart:newCart
});
//save to local storage
localStorage.setItem('cart', JSON.stringify(this.state.cart));
 console.log("removing")
}

render(){ const { Component, pageProps } = this.props
console.log(this.state.customer)
      return(
 <cartcontext.Provider value={{cart: this.state.cart, addToCart: this.addToCart, total: this.calculateTotal, removeFromCart: this.removeFromCart, removeFromTotal: this.removeFromTotal, carttotal: this.state.carttotal}}>
<Layout>
   <Component {...pageProps} /> 
</Layout>
</cartcontext.Provider>
  )  
    }
   
}


export default MyApp;