import css from "./main.module.scss";

const Main = () => {
  return (
    <main className={css.main}>
      <div className={css.intro}>
        <div>
          <br />
          <br />
          <br />
          <h2>A place where your health needs are met</h2>
          <p>
            Our most concern is to make sure how customers get quality and
            affordable health care.
          </p>
        </div>
      </div> 
      <div className={css.cards}>
          
         <div>
        <h3>Welcome to</h3> 
<h1>Jomed Pharmacy</h1> 
You and your loved ones’ health come first. With high-quality medications and supplies provided by skilled and experienced pharmacists, you can guarantee to live a healthy life within your budget. We look out for everyone in the community as if they are part of our family too.
             </div> 
             <div>
             <h2>Compassionate</h2> 
<h1>CARE THE</h1> 
<h1>PHARMACEUTICAL WAY</h1>
We are the pharmacy that truly listens to your needs. Let us help you get better.
                 </div>
                 <div>
                     section 3
                 </div>
         </div>
         <div className={css.third}>

         </div>
    </main>
  );
};

export default Main;
