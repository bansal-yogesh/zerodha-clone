import React, { use } from "react";
// import{holdings} from "./data";
import { useState,useEffect } from "react";
import { PieGraph } from "./PieGraph";


const Holdings = () => {

const[holdingsvalues,setholdingsvalues]=useState([]);
useEffect(()=>{
fetch(" https://zerodha-clone-oqj7.onrender.com/holdings").then((res)=>{
return res.json();
  }).then((data)=>{
setholdingsvalues(data);
  })
},[])

const labels = holdingsvalues.map((arr)=>arr.name);


const data = {
  labels,
  datasets: [
    {
      label: 'Stock Price',
      data: holdingsvalues.map((arr)=>arr.price) ,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <>
      <h3 className="title">Holdings ({holdingsvalues.length})</h3>

      <div className="order-table">
        <table class="w-100 table table-bordered ">
          <tr>
            <th>Instrument</th>
            <th >Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th >Day chg.</th>
          </tr>
        

        {
          holdingsvalues.map((stock,index)=>{
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >=0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return(
               <tr>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{curValue.toFixed(2)}</td>
            <td>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
            <td class={profClass}>{stock.net}</td>
            <td class={dayClass}>{stock.day}</td>
          </tr>
            )
          })
        }
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <div>
      <div  class="w-50 ">
      <PieGraph data ={data}/>
      </div>
      </div>
    </>
  );
};

export default Holdings;
