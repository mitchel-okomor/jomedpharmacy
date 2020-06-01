import css from './about.module.scss';

const About = (props)=>{

    return(
        <div className={css.about}>
<h1 className={css.heading}>We want nothing but the best for you.</h1>

<div>
  <h1>Mission</h1> 
  <p>We aim to contribute to the health improvement of the residents in our community by offering safe, effective, consistent, and affordable prescriptions, medical equipment, and pharmaceutical services.</p>
</div>

<div>
 <h1>Who We Are</h1>   
    <p>As a retail & specialty pharmacy in Philadelphia, Pennsylvania, Pennmark Pharmacy serves the community and helps its residents achieve overall wellness through the offered prescriptions, medical equipment, and pharmaceutical services.

No matter how young or old you are, looking out for your health must always be the number one priority. And since complications may come from time to time, our pharmacists, along with the rest of the team, always do our best to guarantee that your overall well-being is maintained.

Here at our pharmacy, we treat our customers like family. We would gladly assist you with your pharmaceutical concerns. Our friendly and efficient staff will see to it that you are looked after. Changing people’s lives for the better is our ultimate goal, that’s why with everything we do, only the best quality is acceptable.</p>
    </div> 




        </div>
    )
}

export default About;