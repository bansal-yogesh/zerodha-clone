import React from "react";

function Hero() {
  return (
    <>
      <div class="container">
        <div class="row text-center m-5 p-5">
          <h1 class="fs-3">Charges</h1>
          <p class="text-muted fs-4 p-1">List of all charges and taxes</p>
        </div>

        <div class="row p-5 text-center">
          <div class="col-12 col-lg-4">
            <img src="media/images/pricing-eq.svg" class="img-fluid" style={{height:"184px", width :"250px"}} />
            <h1 class="fs-3">Free equity delivery</h1>
            <p class="p-3 text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div class="col-12 col-lg-4">
             <img src="media/images/other-trades.svg" class="img-fluid" style={{height:"184px", width :"250px"}}/>
            <h1 class="fs-3">Intraday and F&O trades</h1>
            <p class="p-3 text-muted">
             Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>
          <div class="col-12 col-lg-4">
             <img src="media/images/pricing-eq.svg" class="img-fluid" style={{height:"184px", width :"250px"}}/>
            <h1 class="fs-3">Free direct MF</h1>
            <p class="p-3 text-muted">
             All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
