import App from 'next/app';
import './styles.scss'
import Layout from '../components/layout';
import appContext from '../components/appcontext';
import fetch from 'isomorphic-unfetch';



  

// This default export is required in a new `pages/_app.js` file.
class MyApp extends App{
  state = {
    customer:'',
    cart : [],
    carttotal : 0
}



componentDidMount(){

 (async()=>{
     //get cart items from local storage
  const cart = JSON.parse(localStorage.getItem('cart'));
  
  //get cart total
  const carttotal = JSON.parse(localStorage.getItem('total'));
const customer =await this.fetchCustomer();
console.log(customer);
  if (cart) {
    this.setState({
      customer:customer,
       cart:cart,
       carttotal:carttotal
    });
  }
  })();
 
};

fetchCustomer = async ()=>{
  const customerId = localStorage.getItem('customerId');
  
    console.log(customerId);
    const url = "http://localhost:4000/customer/"+customerId;
    const res = await fetch(url, {
      headers: {
        "Authorization": localStorage.getItem('token')
    }});
    const data = await res.json();
    const customer = data.data;
    console.log(customer);
  return customer;

}

//add a product to cart
addToCart = async (product) => {

  //check if product is in cart already and add to quantity
  if(product.quantity){
    console.log("found product");
      let productHolder = "";
   for(let i=0; i<this.state.cart.length; i++){
       if(this.state.cart[i].id == product.id ){

         //copy the product from cart in the state
               productHolder = this.state.cart[i];
               console.log(this.state.cart[i]);
               //remove the product from cart in the state
             this.state.cart.splice(i);
               console.log("cart: " + productHolder);
              //re-add the produc to state cart after incrementing the quantity
               productHolder.quantity += 1;
               await this.setState({
                 cart: [...this.state.cart, productHolder]
             });
             //save to local storage
             localStorage.setItem('cart', JSON.stringify(this.state.cart));
             
               break;
       }

      
   
    }
   }
else{
  product.quantity = 1;
  await this.setState({
    cart: [...this.state.cart, product]
});
//save to local storage
localStorage.setItem('cart', JSON.stringify(this.state.cart));
}
}

calculateTotal = async (price) => {
  await this.setState({
    carttotal: this.state.carttotal + price
  });
  localStorage.setItem('total', JSON.stringify(this.state.carttotal));
}

removeFromTotal = async (product) => {
  let producdToRemove = this.state.cart.filter(item => item.id === product.id);

  if(this.state.carttotal >= 1 && producdToRemove ){
  await  this.setState({
    carttotal: this.state.carttotal - product.price
  });
  localStorage.setItem('total', JSON.stringify(this.state.carttotal));
  }
  
}

removeFromCart = async (product)=>{
  console.log("product: "+product.id);
  let newCart = this.state.cart.filter(item => item.id !== product.id);
 await this.setState({
    cart:newCart
});
//save to local storage
console.log(newCart.length);
localStorage.setItem('cart', JSON.stringify(this.state.cart));
}

//set customer to update state and context
setCustomer = (val) =>{

  console.log("SetCustomer: "+val);
  this.setState(
    {
      customer: val
    }
  );
}



render(){ const { Component, pageProps } = this.props
      return(
 <appContext.Provider value={{cart: this.state.cart, customer:this.state.customer, setCustomer:this.setCustomer, addToCart: this.addToCart, total: this.calculateTotal, removeFromCart: this.removeFromCart, removeFromTotal: this.removeFromTotal, carttotal: this.state.carttotal}}>
<Layout>
   <Component {...pageProps} /> 
</Layout>
</appContext.Provider>
  )  
    }
   
}


export default MyApp;