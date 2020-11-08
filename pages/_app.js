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
    carttotal : 0,
    navValues: {class:"fa fa-bars", text:""}
    
}



componentDidMount(){
this.chat();
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
       carttotal:carttotal,
       navValues: {class:"fa fa-bars", text:""}
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
       if(this.state.cart[i].product_id === product.product_id ){

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
  console.log(price)
  await this.setState({
    carttotal: this.state.carttotal + price
  });
  localStorage.setItem('total', JSON.stringify(this.state.carttotal));
}

removeFromTotal = async (product) => {
  let producdToRemove = this.state.cart.filter(item => item.id === product.id);
console.log(product.quantity);
  if(this.state.carttotal >= 1 && producdToRemove ){
  await  this.setState({
    carttotal: this.state.carttotal - (product.price * product.quantity)
  });
  localStorage.setItem('total', JSON.stringify(this.state.carttotal));
  }
  
}

removeFromCart = async (product)=>{
  console.log("product: "+product.product_id);
  let newCart = this.state.cart.filter(item => item.product_id !== product.product_id);
  
 await this.setState({
    cart:newCart
});
product.quantity = 0;

//save to local storage
console.log(this.state.cart.length);
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

chat = ()=>{
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5f12fe287258dc118bee7be8/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
}

//close the nav bar
 closeNav=()=>{
  let elem = document.getElementsByClassName("togle_nav")[0];
  elem.style.display = "none";

  if(this.state.navValues.class === "fa fa-bars" && elem.style.display ==="block")      {
    this.setState({navValues:{class:"", text:"X"}});
    } else{
    this.setState({navValues:{class:"fa fa-bars", text:""}
       }   );
  
    } 
}

//togle navigation
togleNav=()=> {
  let elem = document.getElementsByClassName("togle_nav")[0];
  let cartElem = document.getElementById("mobile_cart");

  elem.style.display === "block"?elem.style.display = "none":elem.style.display = "block";
  cartElem.style.display === "flex"?cartElem.style.display = "none":cartElem.style.display = "flex";

if(this.state.navValues.class === "fa fa-bars")      {
  this.setState({navValues:{class:"", text:"X"}});
  } else{
  this.setState({navValues:{class:"fa fa-bars", text:""}}
  );

  } 
}



render(){ const { Component, pageProps } = this.props
      return(
 <appContext.Provider value={{cart: this.state.cart, customer:this.state.customer, setCustomer:this.setCustomer, addToCart: this.addToCart, total: this.calculateTotal, removeFromCart: this.removeFromCart, removeFromTotal: this.removeFromTotal, carttotal: this.state.carttotal, closeNav:this.closeNav, togleNav:this.togleNav, icon:this.state.navValues}}>
<Layout>
   <Component {...pageProps}  /> 

   <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}</style>
</Layout>
</appContext.Provider>
  )  
    }


   
}


export default MyApp;