<<<<<<< HEAD
import React from 'react';
function Signup({setlogin,setSignup}) {

    const loginclick=()=>{
setSignup(false);
setlogin(true);
    }
    return ( <>
     <div class="container">
         <form action="http://localhost:3005/signup" method='post'> 
         <input placeholder='Enter Your Name' type='text' name="name" required/>
            <br/>

            <input placeholder='Enter Your Mobile No.' type='text' name="userMobile" required/>
            <br/>
            <input placeholder='Enter Your email' type='email' name="email"/>
            <br/>
            <input placeholder='Enter Your Password' type='password' name="password" required/>
            <br/>
            <button>signup</button>
         </form>
         <button onClick={loginclick}>Login</button>
         </div>
    </> );
}

=======
import React from 'react';
function Signup({setlogin,setSignup}) {

    const loginclick=()=>{
setSignup(false);
setlogin(true);
    }
    return ( <>
     <div class="container">
         <form action="http://localhost:3005/signup" method='post'> 
         <input placeholder='Enter Your Name' type='text' name="name" required/>
            <br/>

            <input placeholder='Enter Your Mobile No.' type='text' name="userMobile" required/>
            <br/>
            <input placeholder='Enter Your email' type='email' name="email"/>
            <br/>
            <input placeholder='Enter Your Password' type='password' name="password" required/>
            <br/>
            <button>signup</button>
         </form>
         <button onClick={loginclick}>Login</button>
         </div>
    </> );
}

>>>>>>> 31498f67d5e4e368a383634cc4bf5d861f9c5d55
export default Signup;