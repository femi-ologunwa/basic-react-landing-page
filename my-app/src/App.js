import React from 'react';
import Header from './components/header/Header';
import Features from './components/features/Features';
import About from './components/about/About';
import aboutImage1 from './images/Frame 19.png';
import aboutImage2 from './images/download.png';
import Presentation from './components/presentation/Presentation';
import Contact from './components/contact/Contact';

function App() {
   return (
      <div className='App'>
         <Header />
         <Features />
         <About
            image={aboutImage1}
            title='Comes With All You Need For Daily Life'
            button='Get The App'
         />
         <Presentation />
         <About
            image={aboutImage2}
            title='Download And Get The App Now'
            button='Download'
         />
         <Contact />
      </div>
   );
}

export default App;
