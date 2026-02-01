// import React from 'react';
// function Login({setSignup,setlogin}) {

//     const signupclick=()=>{
// setSignup(true);
// setlogin(false);
//     }
//     return ( <>
//     <div class="container">
//          <form action="https://zerodha-clone-oqj7.onrender.com/login" method='post'>
//             <input placeholder='Enter Your Mobile No.' type='text' name="userMobile"/>
//             <br/>
//             <input placeholder='Enter Your Password' type='password' name="password"/>
//             <br/>
//             <button>Login</button>
//          </form>
//          <button onClick={signupclick}>Signup</button>
//          </div>
//     </> );
// }

// export default Login;


import React, { useState } from 'react';

function Login({ setSignup, setlogin }) {
    // Keep your name fields intact as state
    const [userMobile, setUserMobile] = useState("");
    const [password, setPassword] = useState("");

    const signupclick = () => {
        setSignup(true);
        setlogin(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevents the page from reloading

        try {
            const response = await fetch("https://zerodha-clone-oqj7.onrender.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userMobile: userMobile, // Your exact field name
                    password: password
                }),
                // This is the CRITICAL part for cookies to work
                credentials: "include", 
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // The browser has now saved the cookie for .bansaltrades.com
                // Now we manually redirect to the dashboard
                window.location.href = "https://www.dashbord.bansaltrades.com/";
            } else {
                alert(result.message || "Invalid Login Credentials");
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("Unable to connect to the server.");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <input 
                    placeholder='Enter Your Mobile No.' 
                    type='text' 
                    name="userMobile"
                    value={userMobile}
                    onChange={(e) => setUserMobile(e.target.value)}
                />
                <br/>
                <input 
                    placeholder='Enter Your Password' 
                    type='password' 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button type="submit">Login</button>
            </form>
            <button onClick={signupclick}>Signup</button>
        </div>
    );
}

export default Login;