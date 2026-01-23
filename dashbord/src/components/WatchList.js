import React from "react";
import { watchlist } from "./data";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Tooltip from "@mui/material/Tooltip";
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const WatchList = ({setFormAction,setActionUuid}) => {
  return (
    <div className="watchlist-container">
      <div className="border-top border-bottom border-secondary-subtle d-flex p-2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search w-100 border-0"
          style={{ fontSize: "0.7rem" }}
        ></input>

        <span className="counts w-25 text-end pe-2 text-muted fs-8"> {watchlist.length} / 50</span>
      </div>

      <ul className="p-3" style={{fontSize:"0.8rem"}}>
        {watchlist.map((stock, index) => {
          return (
          <WatchListItems stock = {stock} setFormAction={setFormAction} setActionUuid={setActionUuid}/>
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;



const WatchListItems =({stock,setFormAction,setActionUuid})=>{
const[WatchListItemAction,setWatchListItemAction] = useState(false);

const handelMouseEnter =()=>{
  setWatchListItemAction(true);

}

const handelMouseExit =()=>{
  setWatchListItemAction(false);
}
return(

  <li className="d-flex hover-item" onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseExit}>
    <div class="w-50">
      <p>{stock.name}</p>
    </div>
    <div class="w-50 text-end">
     <span class="text-muted fw-semibold" style={{ fontSize: "0.5rem" }}>{stock.percent}</span>
      {stock.isDown ? (<KeyboardArrowDownIcon/>) : (<KeyboardArrowUpIcon/>)}
       <span>{stock.price}</span>
    </div>
    {(WatchListItemAction && <WatchListAction uuid={stock.name} setFormAction={setFormAction} setActionUuid={setActionUuid}/>)}
  </li>
)


}




const WatchListAction =({uuid,setFormAction,setActionUuid})=>{



  return(
    <span className="w-75">
      <Tooltip title="Buy" arrow placement="top" >
        <button className="buy action"onClick={()=>{setFormAction("buy");setActionUuid(uuid)}}>Buy</button>
      </Tooltip>

       <Tooltip title="Sell" arrow placement="top" >
        <button className="sell action"onClick={()=>{setFormAction("sell");setActionUuid(uuid)}}>Sell</button>
      </Tooltip>

       <Tooltip title="Graph" arrow placement="top" >
        <button className="graph action"onClick={()=>{setFormAction("graph");setActionUuid(uuid)}}><BarChartIcon className="border-non"></BarChartIcon></button>
      </Tooltip>

      <Tooltip title="More" arrow placement="top" >
        <button className="more action"onClick={()=>{setFormAction("more");setActionUuid(uuid)}}><MoreHorizIcon></MoreHorizIcon></button>
      </Tooltip>
    </span>
  )

}