import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Signup from './Signup';
import Login from './Login';
function SignupPage() {
   const[login,setlogin]=useState(false);
   const[signup,setSignup]=useState(true);
    return ( 
        <>
       {signup==true && <Signup setlogin={setlogin} setSignup={setSignup} />};
       {login==true && <Login setlogin={setlogin} setSignup={setSignup} />}
        </>
       
     );
}

export default SignupPage;