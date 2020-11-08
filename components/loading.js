import React from 'react';
import css from './loading.module.scss';




const Loading = (props) => {
 

  return(
    <div className={css.loading_container}><div className={css.loader}></div></div>
  )
   
}



export default Loading;
