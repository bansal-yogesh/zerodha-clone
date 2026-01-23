<<<<<<< HEAD
import React from "react";

function Equity() {
  return (
    <>
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-1"></div>
          <div class="col-10">
            <table class="text-muted border " style={{ fontSize: "0.8rem " }}>
              <tr class="border">
                <th class="p-3"> &nbsp; </th>
                <th class="p-3">Equity delivery</th>
                <th class="p-3">Equity intraday</th>
                <th class="p-3">F&O - Futures</th>
                <th class="p-3">F&O - Options</th>
              </tr>
              <tr>
                <td class="p-3">Brokerage</td>
                <td class="p-3">Zero Brokerage</td>
                <td class="p-3">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>

                <td class="p-3">
                  0.03% or Rs. 20/executed order whichever is lower{" "}
                </td>
                <td class="p-3">Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td class="p-3">STT/CTT</td>
                <td class="p-3">0.1% on buy & sell</td>
                <td class="p-3">0.025% on the sell side</td>
                <td class="p-3">0.02% on the sell side </td>
                <td class="p-3">
                  0.125% of the intrinsic value on options that are bought and
                  exercised 0.1% on sell side (on premium)
                </td>
              </tr>

              <tr>
                <td class="p-3">Transaction charges</td>
                <td class="p-3">NSE: 0.00297%
BSE: 0.00375%</td>
                <td class="p-3">NSE: 0.00297%
BSE: 0.00375%</td>
                <td class="p-3">NSE: 0.00173%
BSE: 0</td>
                <td class="p-3">NSE: 0.03503% (on premium)
BSE: 0.0325% (on premium)</td>
              </tr>

               <tr>
                <td class="p-3">GST</td>
                <td class="p-3">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td class="p-3">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td class="p-3">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td class="p-3">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>

               <tr>
                <td class="p-3">SEBI charges</td>
                <td class="p-3">₹10 / crore</td>
                <td class="p-3">₹10 / crore</td>
                <td class="p-3">₹10 / crore</td>
                <td class="p-3">₹10 / crore</td>
              </tr>

               <tr>
                <td class="p-3">Stamp charges</td>
                <td class="p-3">0.015% or ₹1500 / crore on buy side</td>
                <td class="p-3">0.003% or ₹300 / crore on buy side</td>
                <td class="p-3">0.002% or ₹200 / crore on buy side</td>
                <td class="p-3">0.003% or ₹300 / crore on buy side</td>
              </tr>

            </table>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Equity;
=======
import React from "react";

function Equity() {
  return (
    <>
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-1"></div>
          <div class="col-10">
            <table class="text-muted border " style={{ fontSize: "0.8rem " }}>
              <tr class="border">
                <th class="p-3"> &nbsp; </th>
                <th class="p-3">Equity delivery</th>
                <th class="p-3">Equity intraday</th>
                <th class="p-3">F&O - Futures</th>
                <th class="p-3">F&O - Options</th>
              </tr>
              <tr>
                <td class="p-3">Brokerage</td>
                <td class="p-3">Zero Brokerage</td>
                <td class="p-3">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>

                <td class="p-3">
                  0.03% or Rs. 20/executed order whichever is lower{" "}
                </td>
                <td class="p-3">Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td class="p-3">STT/CTT</td>
                <td class="p-3">0.1% on buy & sell</td>
                <td class="p-3">0.025% on the sell side</td>
                <td class="p-3">0.02% on the sell side </td>
                <td class="p-3">
                  0.125% of the intrinsic value on options that are bought and
                  exercised 0.1% on sell side (on premium)
                </td>
              </tr>

              <tr>
                <td class="p-3">Transaction charges</td>
                <td class="p-3">NSE: 0.00297%
BSE: 0.00375%</td>
                <td class="p-3">NSE: 0.00297%
BSE: 0.00375%</td>
                <td class="p-3">NSE: 0.00173%
BSE: 0</td>
                <td class="p-3">NSE: 0.03503% (on premium)
BSE: 0.0325% (on premium)</td>
              </tr>

               <tr>
                <td class="p-3">GST</td>
                <td class="p-3">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td class="p-3">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td class="p-3">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td class="p-3">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>

               <tr>
                <td class="p-3">SEBI charges</td>
                <td class="p-3">₹10 / crore</td>
                <td class="p-3">₹10 / crore</td>
                <td class="p-3">₹10 / crore</td>
                <td class="p-3">₹10 / crore</td>
              </tr>

               <tr>
                <td class="p-3">Stamp charges</td>
                <td class="p-3">0.015% or ₹1500 / crore on buy side</td>
                <td class="p-3">0.003% or ₹300 / crore on buy side</td>
                <td class="p-3">0.002% or ₹200 / crore on buy side</td>
                <td class="p-3">0.003% or ₹300 / crore on buy side</td>
              </tr>

            </table>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Equity;
>>>>>>> 31498f67d5e4e368a383634cc4bf5d861f9c5d55
