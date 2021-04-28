import React from 'react';
import './about.css';

function About(props) {
   return (
      <div id='about'>
         <div className='about-image'>
            <img src={props.image} alt='' />
         </div>
         <div className='about-text'>
            <h2>{props.title}</h2>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
               aliquam recusandae similique dignissimos nostrum veniam voluptas
               beatae ea facere repellendus, laborum esse exercitationem odit
               tempora reiciendis porro optio repudiandae blanditiis ipsa harum
               excepturi cumque atque?
            </p>
            <button>{props.button}</button>
         </div>
      </div>
   );
}

export default About;
