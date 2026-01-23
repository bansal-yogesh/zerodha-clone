<<<<<<< HEAD
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

=======
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

>>>>>>> 31498f67d5e4e368a383634cc4bf5d861f9c5d55
export default SignupPage;