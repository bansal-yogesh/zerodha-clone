import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  const[userDetail,setUserDetail]=useState({});
  useEffect(()=>{
  fetch(" https://zerodha-clone-oqj7.onrender.com/user").then((res)=>{
  return res.json();
    }).then((data)=>{
  setUserDetail(data);
    })
  },[]);

  return (
    <>

     <TopBar user = {userDetail}/>
     <Dashboard user = {userDetail}/>
    </>
  );
};

export default Home;
