import React from 'react';
import Navbar from '../navbar/Navbar';
import './header.css';

function Header() {
   return (
      <div id='main'>
         <Navbar />
         <div className='name'>
            <h1>
               <span>Launch Your App</span> with Confidence And Creativity
            </h1>
            <p className='details'>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Aperiam, iusto.
            </p>
            <a href='#' className='cv-btn'>
               Download
            </a>
         </div>
      </div>
   );
}

export default Header;
