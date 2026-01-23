import React from 'react';
import Hero from './Hero';
import Brokrage from './Brokrage';
import Equity from './Equity';
import { Outlet } from 'react-router-dom';
function Pricing() {
    return ( <>
    <Hero/>
    <Brokrage/>
    <Outlet/>
    </> );
}

export default Pricing;