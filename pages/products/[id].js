import ProductItem from '../../components/productItem'
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';


const Productitem = props => {
  const router = useRouter();
const [product, setProdcut] = useState("")


useEffect(()=>{
 fetchData();

}, []);


const fetchData = async ()=>{
   const id = router.query.id;
  console.log(id);
  const res = await fetch(`http://localhost:4000/product/${id}`);
  const result = await res.json();
  console.log(result.data);
  const product = result.data;
  setProdcut(product);
}

  return (
        <ProductItem product={product}/>
  )

 
};


// Productitem.getInitialProps = async function(context) {



// };
export default Productitem;