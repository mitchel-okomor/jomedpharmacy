import React, { useState, useReducer,useEffect } from "react";
import css from './editproduct.module.scss';
import axios from "axios";
import Loading from '../../components/loading';
import Link from "next/link";
import { useRouter } from 'next/router'




const initialState = {
  customerId:"",
      name: "",
  price: "",
  category: "",
  description: "",
loading: false,
};

//handle state changes with reducer
const reducer = (state, { field, value }) => {
return { ...state, [field]: value  };
};

const EditProduct = () => {
    const router = useRouter()
const [product, setProduct] = useState("");
    //use reducer hook to dispatch change action
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  //during component mounting
  useEffect(()=>{
    fetchData();   
const customerId = localStorage.getItem("customerId");
dispatch({field:"customerId", value:customerId}); 
 
  },[])

  //submit form data to backend server
  const handleSubmit =async (e) => {
   e.preventDefault();
   
        dispatch({field:"loading", value:true});
const url = 'http://localhost:4000/product/'+product.product_id;
  console.log(state);  
  try{
  const response = await axios.patch(url, state, {
    timeout: 60000
  });
  if(response.status==200){
   console.log(response);
   localStorage.setItem("customerId", response);
dispatch({field:"loading", value:false}); 
router.push("/admin");
  }
}
  catch(error){
    console.log(error);
    dispatch({field:"loading", value:false}); 
  }
  
  };


const fetchData = async ()=>{
  const id = router.query.id;
  const res = await fetch(`http://localhost:4000/product/${id}`);
  const result = await res.json();
  const product = result.data;
  setProduct(product);

  dispatch({field:"name", value:product.name}); 
dispatch({field:"category", value:product.category}); 
dispatch({field:"price", value:product.price}); 
dispatch({field:"description", value:product.description});
  console.log(product);

}



  const { name, price, category, description, loading, chat, button} = state;
  if(loading){
    
return(
  <div className={css.editproduct}>
<Loading />
    </div>
) 
    }
  return (
    <div className={css.editproduct}>
    <div id={css.myForm}>
      <br />
        <form className={css.formcontainer}>
          <fieldset>
            <legend><b><h3 className={css.heading}>Edit Product</h3></b></legend>
            <br />
            <label for="fname">Name:</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={handleChange}
            />
            <br />
            <label for="price">Price:</label> <br />
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              required
              onChange={handleChange}
              
            />
            <br />
            <label for="prescription">prescription details:</label> <br />
            <textarea
              type="text"
              id="prescription"
              name="description"
              value={description}
              required
              onChange={handleChange}
            />
            <br />
            <label for="category">category:</label>
    <select id="category" name="category" onChange={handleChange}>
      <option value="antibiotics" selected>Antibiotics</option>
      <option value="antidiabetics">Antidiabetics</option>
      <option value="antimaleria">Antimaleria</option>
    </select>
            <br />
            <br />
            <button type="submit" className={css.btn}  onClick={handleSubmit}>Submit</button>
      
            <button  className={css.cancel} > <Link href="/admin">cancel</Link></button>
          </fieldset>
        </form>
        </div>
</div>
  );
};

// EditProduct.getInitialProps = async function(context) {
//     const { id } = context.query;
//     const res = await fetch(`http://localhost:4000/product/${id}`);
//     const result = await res.json();
//     console.log(result.data);
//     const product = result.data;
//     return {product};
  
// }

export default EditProduct;
