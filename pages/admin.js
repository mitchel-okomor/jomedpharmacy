import css from './admin.module.scss';
import {useEffect, useState} from "react";
import Link from 'next/link';
import axios from 'axios';
import Loading from '../components/loading';
import { useContext } from 'react';
import appContext from '../components/appcontext';
import { useRouter } from 'next/router';


const Admin = ()=>{
  const router = useRouter()
  const {customer } = useContext(appContext);

    const [products, setProducts] = useState(["o","p"]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [image, setImage] = useState();
    const [buttonText, setButtonText] = useState("Add product");

    useEffect(()=>{
getProducts();
    }, []);


    const getProducts = async function() {
        try{
      const res = await fetch('http://localhost:4000/products');
          const data = await res.json();
         setProducts(data.data);
        }catch{
      console.log("Unable to load Products");
     setProducts("")
        }
        };

       const addButton = ()=>{
         
        let elem = document.getElementsByClassName("admin_form")[0];
        elem.style.display === "block"?elem.style.display = "none":elem.style.display = "block";
        if(buttonText==="Add product"){
          setButtonText("Close");
        }else{
          setButtonText("Add product");
        }
       }


       //get form values
       const handleChange = (e) =>{
         console.log(e.target.value);
switch(e.target.name){
  case "name":
    setName(e.target.value);
      break;
    case "price":
      setPrice(e.target.value);
    break;
    case "category":
      setCategory(e.target.value);
      break;
    case "description":
      setDescription(e.target.value)
      break
   case "image":
   setImage(e.target.files[0]);
 
       }
       console.log(image);
      }

      
        //submit form data to backend server
        const handleSubmit =async (e) => {
          setLoading(true);
         e.preventDefault();
         var formData = new FormData();
         formData.append("name", name);
         formData.append("price", price);
         formData.append("category", category);
         formData.append("description", description);
         formData.append("image", image);
         
      const url = 'http://localhost:4000/product';
        try{
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          timeout: 30000
        });
        if(response.status==200){
         console.log(response);
         getProducts();
         setLoading(false);
        }
      }
        catch(error){
          console.log(error);
          setLoading(false);
        }
        
        };

        const  handleDelete = async(id)=>{
          console.log(id);
          setLoading(true);
          const url = 'http://localhost:4000/product/'+id;
          try{
          const response = await axios.delete(url,{
            timeout: 90000
          });
          if(response.status==200){
           console.log(response);
           getProducts();
           setLoading(false);
          }
        }
          catch(error){
            console.log(error);
            setLoading(false);
            alert("failed to delete")
          }
          
          };
      


if(loading){
  return <Loading />
}
else if(!customer || !(Boolean(customer.is_admin))){
  if (typeof window !== 'undefined') {
    router.push('/')
  }
}
    return(
        <div className={css.admin}>
<h1 className={css.admin_header}>Admin Page</h1>
            <div className={css.add_product}>
              {/** Handle show upload form */}
    <button onClick={addButton}>{buttonText}</button>
                <div>
                <form className={css.show} className="admin_form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="product name" value={name} onChange={handleChange}/>

    <label for="price">Price:</label>
    <input type="text" id="price" name="price" placeholder="product price" value={price} onChange={handleChange}/>

    <label for="category">category:</label>
    <select id="category" name="category" onChange={handleChange}>
      <option value="antibiotics" selected>Antibiotics</option>
      <option value="antidiabetics">Antidiabetics</option>
      <option value="antimaleria">Antimaleria</option>
    </select>
    <br />
    <label for="image">Upload image:</label>
    <input type="file" id="image" name="image" placeholder="Select Image"onChange={handleChange}/>
    <label for="description">Description:</label>
    <textarea type="text" id="description" name="description" placeholder="Product Description" value={description} onChange={handleChange} />
    <br/>
    <button onClick={handleSubmit}>Submit</button>

  </form>
                </div>
            </div>
 
 <table  className={css.table}>
        <thead>
          <tr>
            <th >
              <div >Product</div>
            </th>
            <th >
              <div >Category</div>
            </th>
            <th >
              <div >Price</div>
            </th>
            <th >
              <div >In stock</div>
            </th>
            <th >
              <div >Action</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
          products.map((item) => (
            <tr key={item.product_id}>
              <td >
                <div>
                  <img
                    src={"http://localhost:4000/"+item.image_url}
                    alt=""
                    width="40em"
                  />
                  <br />
                  <Link href="/products/[id]" as={`/products/${item.id}`}>
<a> {item.name}</a></Link>            
                </div>

              </td>
              <td >
                <strong>{item.category}</strong>
              </td>
              <td >
                <strong>₦ {item.price}</strong>
              </td>
              <td>
                {item.quantity}
                </td>
                <td>
                <button><Link href="/editproduct/[id]" as={`/editproduct/${item.product_id}`}>Edit</Link></button>
                <button onClick={()=>{handleDelete(item.product_id)}}>Delete</button>
                </td>
            </tr>
           
          ))}
        </tbody>
      </table>

        </div>
    )
}




export default Admin;