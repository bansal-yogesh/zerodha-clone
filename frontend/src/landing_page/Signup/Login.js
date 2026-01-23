import React from 'react';
function Login({setSignup,setlogin}) {

    const signupclick=()=>{
setSignup(true);
setlogin(false);
    }
    return ( <>
    <div class="container">
         <form action="https://zerodha-clone-oqj7.onrender.com/login" method='post'>
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

export default Login;