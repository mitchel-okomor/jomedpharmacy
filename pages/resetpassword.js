import fetch from 'isomorphic-unfetch';
import {useEffect} from 'react';


const ResetPassword = props => {
    const { token } = context.query;
    const res = await fetch(`http://localhost:4000/product/${id}`);

    useEffect(()=>{
        console.log(token);
    })
  return (
      <div>Reset Password Page</div>
  )
};

export default ResetPassword;