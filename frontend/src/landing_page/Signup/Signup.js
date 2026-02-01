// import React from 'react';
// function Signup({setlogin,setSignup}) {

//     const loginclick=()=>{
// setSignup(false);
// setlogin(true);
//     }


//     return ( <>
//      <div class="container">
//          <form action=" https://zerodha-clone-oqj7.onrender.com/signup" method='post'> 
//          <input placeholder='Enter Your Name' type='text' name="name" required/>
//             <br/>

//             <input placeholder='Enter Your Mobile No.' type='text' name="userMobile" required/>
//             <br/>
//             <input placeholder='Enter Your email' type='email' name="email"/>
//             <br/>
//             <input placeholder='Enter Your Password' type='password' name="password" required/>
//             <br/>
//             <button>signup</button>
//          </form>
//          <button onClick={loginclick}>Login</button>
//          </div>
//     </> );
// }

// export default Signup;

import React, { useState } from 'react';

function Signup({ setlogin, setSignup }) {
    const [formData, setFormData] = useState({
        name: "",
        userMobile: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // Use your backend URL - ensure this is the correct API endpoint
            const response = await fetch("https://www.bansaltrades.com/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
                credentials: "include", // CRITICAL for cookies/sessions
            });

            if (response.ok) {
                // If backend redirects, you might need to handle it or 
                // manually move the user to the dashboard
                window.location.href = "https://www.dashbord.bansaltrades.com/";
            } else {
                alert("Signup failed. Mobile number might already be registered.");
            }
        } catch (error) {
            console.error("Signup Error:", error);
            alert("Connection error to server.");
        }
    };

    const loginclick = () => {
        setSignup(false);
        setlogin(true);
    };

    return (
        <div className="container">
            <form onSubmit={handleSignup}>
                <input 
                    placeholder='Enter Your Name' 
                    type='text' 
                    name="name" 
                    onChange={handleChange} 
                    required 
                />
                <br />
                <input 
                    placeholder='Enter Your Mobile No.' 
                    type='text' 
                    name="userMobile" 
                    onChange={handleChange} 
                    required 
                />
                <br />
                <input 
                    placeholder='Enter Your email' 
                    type='email' 
                    name="email" 
                    onChange={handleChange} 
                />
                <br />
                <input 
                    placeholder='Enter Your Password' 
                    type='password' 
                    name="password" 
                    onChange={handleChange} 
                    required 
                />
                <br />
                <button type="submit">Signup</button>
            </form>
            <button onClick={loginclick}>Login</button>
        </div>
    );
}

export default Signup;