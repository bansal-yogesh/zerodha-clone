<<<<<<< HEAD
import React from 'react';
function Login({setSignup,setlogin}) {

    const signupclick=()=>{
setSignup(true);
setlogin(false);
    }
    return ( <>
    <div class="container">
         <form action="http://localhost:3005/login" method='post'>
            <input placeholder='Enter Your Mobile No.' type='text' name="userMobile"/>
            <br/>
            <input placeholder='Enter Your Password' type='password' name="password"/>
            <br/>
            <button>Login</button>
         </form>
         <button onClick={signupclick}>Signup</button>
         </div>
    </> );
}

=======
import React from 'react';
function Login({setSignup,setlogin}) {

    const signupclick=()=>{
setSignup(true);
setlogin(false);
    }
    return ( <>
    <div class="container">
         <form action="http://localhost:3005/login" method='post'>
            <input placeholder='Enter Your Mobile No.' type='text' name="userMobile"/>
            <br/>
            <input placeholder='Enter Your Password' type='password' name="password"/>
            <br/>
            <button>Login</button>
         </form>
         <button onClick={signupclick}>Signup</button>
         </div>
    </> );
}

>>>>>>> 31498f67d5e4e368a383634cc4bf5d861f9c5d55
export default Login;