import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useState,useEffect } from "react";

const Home = () => {

  const[userDetail,setUserDetail]=useState({});

  useEffect(()=>{
  fetch("https://www.bansaltrades.com/user",{
    method: "GET",
    credentials: "include"
  }).then((res)=>{
  return res.json();
    }).then((data)=>{
  setUserDetail(data);
    })
  },[]);

  return (
    <>
     <TopBar userDetail = {userDetail}/>
     <Dashboard userDetail = {userDetail}/>
    </>
  );
};

export default Home;
