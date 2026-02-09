import React from 'react';
import {useNavigate} from 'react-router-dom';

function OpenAccount() {


    const navigate = useNavigate();
    const signClick=()=>{
       navigate('/signup');
        
    }

    return ( 
        <div className = 'container pt-5 mt-5' >
           
            <div className="p-4">
                <h1 className="text-center fs-3 fw-semibold pb-3"style={{ color: "#424242" }} >Open a Zerodha account</h1>

                <p className="text-center text-muted fw-normal"> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades</p>
<div className="text-center mb-5">
<button className = "btn btn-primary " onClick={signClick}>Sign up for Free</button>
</div>
                
            </div>
        </div>
     );
}

export default OpenAccount;