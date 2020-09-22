import css from './services.module.scss';
import {useContext, useState, useEffect} from 'react';
import appContext from './appcontext';


const Services = (props)=>{
  const {closeNav } = useContext(appContext);

    return(
        <div className={css.services} onClick={closeNav}>


<div className={css.sidebar}>
<ul>
    <li>Health Screening</li>
    <li>Prescription Medications</li>
    <li>OTC Medications</li>
    <li>Medication Reviews</li>
    <li>Mother and Baby</li>
    <li>Health and Fitness</li>
    <li>Blood Pressure Check</li>
    <li>Blood Glucose Check</li>
    <li>Body Mass Index</li>
    <li>Cholesterol Monitoring</li>
</ul>
</div>

<div className={css.article}>

<div>
                <img src="/blood.jpg" />
                <h1>Blood Pressure Check</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 

</p>
            </div>

            <div>
            <img src="/glucose.jpg" />
                <h1>Blood Glucose Check</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 

</p>
            </div>

            <div>
            <img src="/weight.jpg" />
                <h1>Weight Management care</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 

</p>
            </div>

            
            <div>
            <img src="/heart.jpg" />
                <h1>Heart Test</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 

</p>
            </div>

            <div>
            <img src="/heart.jpg" />
                <h1>Heart Test</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 

</p>
            </div>

            <div>
            <img src="/heart.jpg" />
                <h1>Heart Test</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 

</p>
            </div>
</div>

           
            </div>
    )
}

export default Services;