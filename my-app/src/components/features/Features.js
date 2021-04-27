import React from 'react';
import FeatureCard from './FeatureCard';
import featureImage1 from '../../images/feature_1.png';
import featureImage2 from '../../images/feature_2.png';
import featureImage3 from '../../images/feature_3.png';
import './features.css';

function Features() {
   return (
      <div id='features'>
         <div className='a-container'>
            <FeatureCard image={featureImage1} title='Development Course' />

            <FeatureCard image={featureImage2} title='Money Saving Services' />

            <FeatureCard image={featureImage3} title='Usability Interface' />
         </div>
      </div>
   );
}

export default Features;
