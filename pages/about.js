import css from './about.module.scss';
import {useContext, useState, useEffect} from 'react';
import appContext from './appcontext';




const About = (props)=>{

    const {closeNav } = useContext(appContext);


    return(
        <div className={css.about} onClick={closeNav}>
          <div className={css.img}><img src="/aboutimage.png"/></div>
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

    <div>
 <h1>Values</h1>   
   <h3>Integrity</h3>
   <p>Our promise is our most vital asset – our word is our bond. We honor our commitments to our different stakeholders against adversity We act with honesty and integrity, not compromising the truth</p>
   <h3>People Focused on people</h3>

<p>centric company that promotes teamwork & development Choosing the best people for our work, employing the best available practices, and always challenging ourselves to improve through innovation, strategic planning, collaboration, and teamwork
</p>
<h3>Innovation</h3>

<p>A knowledge-driven organization that is continuously redefining itself We are dedicated to the highest level of expertise in everything that we do We are creative in delivering value to our fellow associates, customers, share owners, manufacturers, and community We anticipate change and capitalize on the many opportunities that arise
</p>
<h3>Excellence</h3>
<p>
A commitment to excellence and quality in everything we do We are dedicated to satisfying customer needs Excellence demands we define a path of continuous improvement, constantly challenging existing processes. It also requires us to embrace change so we are in the right place when new opportunities open up Excellence also means attracting the best talent in the marketplace and giving them the skills and opportunities they need to become high-achievers.
</p>
<h3>Partnership</h3>
<p>
Growing and maintaining our strategic partnerships. Success is based on fostering long-term profitable growth partnerships We highly value and respect the people partners who make up our company and their commitment to excellence.
 </p>   
 </div> 


        </div>
    )
}

export default About;