import css from './user.module.scss';



const User = (props) => {
   

  return (
    <div className={props.showHide}>
   <ul>
       <li>My account</li>
       <li>Order history</li>
       <li>My prescriptions</li>
       <li>Logout</li>
   </ul>
</div>
  );
};

export default User;
