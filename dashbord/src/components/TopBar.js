import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="row  p-0 ">
      <div className="col-4 border border-secondary-subtle d-flex align-items-center shadow-sm"  style={{height : "100px",fontSize:"0.8rem"}}>
        <div className="text-center w-50" >
         <span class="p-2">NIFTY 50</span>
<small class="p-2">0.00</small>
<small class="p-2">0%</small>
</div>

 <div className="text-center w-50">
         <span class="p-2">Sensex</span>
<small class="p-2">0.00</small>
<small class="p-2">0%</small>
</div>
        
      </div>
      <div className="col-8 border border-secondary-subtle d-flex align-items-center shadow-sm"  style={{height : "100px",fontSize:"0.8rem"}}><Menu /></div>
    </div>
  );
};

export default TopBar;
