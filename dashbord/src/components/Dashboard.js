import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { useState, useEffect } from "react";
import BuyFormAction from "./BuyFormAction";
import { useMediaQuery } from "react-responsive";




const DesktopLayout = ({userDetail}) => {
  const [formAction, setFormAction] = useState(null);
  const [actionUuid, setActionUuid] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setFormAction(null);
    setActionUuid(null);
  }, [location]);
  useEffect(() => {
  
  });

  return (
    <div class="row  vh-100">
      <div class="col-4 border border-secondary-subtle pe-0">

        <WatchList
          setFormAction={setFormAction}
          setActionUuid={setActionUuid}
        />
        
      </div>

      <div class="col-8">
        <div className="row">
        
            {formAction === "buy" && (
              <BuyFormAction
                uuid={actionUuid}
                setFormAction={setFormAction}
                setActionUuid={setActionUuid}

              
              ></BuyFormAction>
            )}
       

          <Routes>
            <Route exact path="/" element={<Summary userDetail={userDetail}/>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};


const MobileLayout = ({userDetail}) => {
  const [formAction, setFormAction] = useState(null);
  const [actionUuid, setActionUuid] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setFormAction(null);
    setActionUuid(null);
  }, [location]);
  useEffect(() => {
  
  });

  return (
    <div class="row  vh-100">
   
      <div class="col-12">
        <div className="row">
        {formAction === "buy" && (
              <BuyFormAction
                uuid={actionUuid}
                setFormAction={setFormAction}
                setActionUuid={setActionUuid}

              
              ></BuyFormAction>
            )}

          <Routes>
            <Route exact path="/" element={<Summary userDetail={userDetail}/>} />
            <Route exact path="/portfolio" element={<Summary userDetail={userDetail}/>} />
            <Route path="/watchlist" element={<WatchList setFormAction={setFormAction}
          setActionUuid={setActionUuid} />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};


const Dashboard = ({ userDetail }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return isMobile ? (
    <MobileLayout userDetail={userDetail} />
  ) : (
    <DesktopLayout userDetail={userDetail} />
  );
};

export default Dashboard;

