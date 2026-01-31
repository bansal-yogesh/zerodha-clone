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

import React from 'react';

function Login({ setSignup, setLogin }) {

  const signupclick = () => {
    setSignup(true);
    setLogin(false);
  }

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent default form submit

    const form = e.target;
    const userMobile = form.userMobile.value;
    const password = form.password.value;

    try {
      const res = await fetch("https://www.bansaltrades.com/login", {
        method: "POST",
        credentials: "include", // very important for cookies
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userMobile, password })
      });

      const data = await res.json();

      if (data.success) {
        // Cookie is now stored by browser
        window.location.href = "https://dashbord.bansaltrades.com";
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <input placeholder="Enter Your Mobile No." type="text" name="userMobile" required />
        <br />
        <input placeholder="Enter Your Password" type="password" name="password" required />
        <br />
        <button type="submit">Login</button>
      </form>

      <button onClick={signupclick}>Signup</button>
    </div>
  );
}

export default Login;
