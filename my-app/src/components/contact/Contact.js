import React from 'react';
import './contact.css';

function Contact() {
   return (
      <div id='contact'>
         <h3>Send Me Email</h3>
         <div className='contact-input'>
            <input type='email' placeholder='example@gmail.com' />
            <a href='#'>Contact</a>
         </div>
      </div>
   );
}

export default Contact;
