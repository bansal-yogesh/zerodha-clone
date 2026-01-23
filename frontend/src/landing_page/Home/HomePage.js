import React from 'react';
import Hero from './Hero';
import Navbar from '../Navbar';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Awards from './Awards';
function HomePage() {
    return ( 
        <>
      
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education/>
        <OpenAccount/>
     

        </>
       
     );
}

export default HomePage;