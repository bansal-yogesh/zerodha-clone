import React from 'react';
import Heros from './Heros';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';


function Product() {
    return ( <>
    
    <Heros/>
    <LeftSection
    imageLink="media/images/kite.png"
    productName="Kite"
    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
    link1="#"
    link2="#"
    link3="#"
    link4="#"
    />
    <RightSection
    productName="Console"
    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
    link1="#"
    imageLink="media/images/console.png"

    />

    <LeftSection
    imageLink="media/images/coin.png"
    productName="Coine"
    productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
    link1="#"
    link2="#"
    link3="#"
    link4="#"
    />


    <RightSection
    productName="Kite Connect API"
    productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
    link1="#"
    imageLink="media/images/kiteconnect.png"

    />
    

     <LeftSection
    imageLink="media/images/varsity.png"
    productName="Varsity mobile"
    productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
    link1="#"
    link2="#"
    link3="#"
    link4="#"
    />

    <p class="text-center fs-4 text-muted mt-5 pt-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

<Universe/>


    </> );
}

export default Product;